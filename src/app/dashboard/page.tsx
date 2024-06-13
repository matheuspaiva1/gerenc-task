import React from 'react'
import Header from '../components/Header'
import { signIn } from 'next-auth/react'
import Tasks from '../components/tasks/Tasks'
import ButtonAddTask from '../components/ButtonAddTask'

export default function Page() {
  return (
    <main className='bg-zinc-100 h-screen'>
      <Header/>
      <div className="flex items-center relative">
        <div className="">
          <h1 className='mt-8 font-bold mx-28 text-2xl  text-sky-900'>Olá, {signIn.name}</h1>
          <h1 className='font-bold mx-28 text-lg text-sky-900'>Aqui estão as suas tarefas</h1>
        </div>
        <ButtonAddTask/>
      </div>
      <Tasks/>

    </main>
  )
}
