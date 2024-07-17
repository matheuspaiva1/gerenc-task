import React from 'react'
import Header from '../components/Header'

export default function Page() {
  return (
    <main className="bg-zinc-100 h-screen">
      <Header/>

      <div className="flex items-center mt-8">
      <h1 className='font-bold mx-28 text-2xl  text-sky-900'>Aqui estão as suas tarefas concluídas</h1>
      </div>
      <div className="card mx-28 mt-4 shadow-xl py-4 bg-zinc-50 text-zinc-800">
      <div className="flex items-center relative">
        <h2 className="card-title py-2 px-6">Tarefa feita</h2>
      </div>
    </div>
    </main>
  )
}
