"use client"
import React from 'react'
import Header from '../components/Header'
import { signIn } from 'next-auth/react'
import Tasks from '../components/tasks/Tasks'
import ButtonAddTask from '../components/ButtonAddTask'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import ButtonLogout from '../components/ButtonLogout'
import Link from 'next/link'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/")
  }
  return (
    <main className='bg-zinc-100 h-screen'>
      <Header/>
      <div className="flex items-center relative">
        <div className="">
          <h1 className='mt-8 font-bold mx-28 text-2xl  text-sky-900'>Olá, {session?.user?.name}</h1>
          <h1 className='font-bold mx-28 text-lg text-sky-900'>Aqui estão as suas tarefas</h1>
        </div>
        <Link href={'/createTasks'}>
          <ButtonAddTask title="Criar tarefa"/>        
        </Link>
      </div>
      <Tasks/>

    </main>
  )
}
