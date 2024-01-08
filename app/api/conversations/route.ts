import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { pusherServer } from "@/app/libs/pusher";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();

        const body = await request.json();
        const {
            userId,
            isGroup,
            members,
            name
        } = body;

        if (!currentUser?.id || !currentUser?.email) {
            throw new NextResponse('Unauthorized', { status: 401 });
        }

        if (isGroup && (!members || members.length < 2) && !name) {
            throw new NextResponse('Invalid Request', { status: 400 });
        }

        if (isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value
                            })),
                            {
                                id: currentUser.id
                            }
                        ]
                    }
                },
                include: {
                    users: true,
                } //to display their image and name bcz we return only userid works like 
            });

            newConversation.users.map((user) => {
                if (user.email) {
                  pusherServer.trigger(user.email, 'conversation:new', newConversation);
                }
              });

            return NextResponse.json(newConversation);
        }
        const existingConversation = await prisma.conversation.findMany({
            where:{
                OR:[
                    {
                        userIds:{
                            equals: [currentUser.id, userId]
                        }
                    },
                    {
                        userIds:{
                            equals: [ userId,currentUser.id]
                        }
                    }
                ]
            }
        });

        const singeCoversation = existingConversation[0];

        if (singeCoversation) {
            return NextResponse.json(singeCoversation);
        }

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: userId
                        },
                        {
                            id: currentUser.id
                        }
                    ]
                }
            },
            include: {
                users: true,
            }//here we iclude user bcz need them for ui
        });

        newConversation.users.map((user) => {
            if (user.email) {
              pusherServer.trigger(user.email, 'conversation:new', newConversation);
            }
          });

        return NextResponse.json(newConversation);
    } catch (error) {
        throw new NextResponse('Internal Error', { status: 500 });
    }
}
