// app/api/auth/route.ts
import { NextApiHandler } from 'next';
import NextAuth from '../../../../nextauth.config';

const handler: NextApiHandler = (req, res) => NextAuth(req, res);

export default handler;
