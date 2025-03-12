import Card from '@/components/Card'
import { getPost } from '@/Server/actions'
import Link from 'next/link'
import React from 'react'

async function page() {
  const posts = await (await getPost()).reverse()

  console.log("Data Get")



  return (
    <div className='h-screen w-full flex flex-col items-center'>

      <header className='w-full h-16 shadow-md flex items-center'>

        <h1 className='text-2xl font-bold justify-start'>CBS Confession</h1>

        <Link href={'/create'} className='border w-10 h-10 text-black rounded-full text-2xl font-bold bg-white justify-end'>+</Link>

      </header>

      <div className='gap-8 flex-1 p-10 overflow-y-auto w-3/5 flex flex-col items-center'>
        {posts.map((post) => (
          <Card content={post.content} date={post.date}/>
        ))}

      </div>

    </div>
  )
}

export default page