'use client'
import {useParams} from 'next/navigation'
import {useMemo} from 'react'

const useConversation = () => {
  const params = useParams()

  const conversationId = useMemo(()=>{
    if(!params?.conversationId){
        return '';
    }
    return params.conversationId as string
  },[params?.conversationId]);

  const isOpen = useMemo(()=>!!conversationId,[conversationId])//!! turns it to boolean

  return useMemo(()=>({
    conversationId,
    isOpen
  }),[conversationId,isOpen]);//return an object with the values
}

export default useConversation