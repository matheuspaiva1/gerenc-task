import React from 'react'
import Header from '../components/Header'
import FormTasks from '../components/FormTasks'
import ButtonAddTask from '../components/ButtonAddTask'

export default function Page() {
  return (
    <main className="bg-zinc-100 h-screen">
      <Header/>

      <div className="flex items-center mt-8">
      <h1 className='font-bold mx-28 text-2xl  text-sky-900'>Edite a sua tarefa</h1>
      <ButtonAddTask type="submit" title="Editar tarefa" />
      </div>
        <FormTasks/>
    </main>
  )
}
