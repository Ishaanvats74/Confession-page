'use client'
import { createPost } from '@/Server/actions'
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'


function Page() {
  const router = useRouter()
  const [content,setContent] = useState('')
  
  async function Handle() {
    if(content.length < 10){
      alert("too short")
      return
    }

    await createPost(content);
    router.push('/')
    
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>

      <div className='w-2/5 h-4/5 border rounded-2xl flex justify-center p-16 items-center'>

       <textarea onChange={(e)=>setContent(e.target.value)} id='confession' className='  '></textarea>

       <button onClick={Handle} className='border w-full rounded-lg py-4 text-xl font-bold hover:bg-white hover:text-black'>Submit Your confession</button>

      </div>

    </div>
  )
}

export default Page