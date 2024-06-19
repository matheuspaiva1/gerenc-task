import React from 'react'
import FormTasks from '../components/FormTasks'
import Header from '../components/Header'

export default function Page() {
  return (
    <main className='bg-zinc-100 h-screen'>
      <Header/>
      <h1 className='mt-8 font-bold mx-28 text-2xl text-sky-900'>Adicione aqui a sua Tarefa</h1>
      <FormTasks/>
    </main>
  )
}
