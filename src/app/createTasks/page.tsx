'use client'
import React, { useContext } from 'react'
import FormTasks from '../components/FormTasks'
import Header from '../components/Header'
import ButtonAddTask from '../components/ButtonAddTask'
import AppContext from '../contexts/appContext'

export default function Page() {
  const { itemList, setItemList, itemsHandler } = useContext(AppContext)

  
  return (
    <main className='bg-zinc-100 h-screen'>
      <Header/>
      <div className="flex items-center mt-8">
        <h1 className='font-bold mx-28 text-2xl text-sky-900 w-80'>Adicione aqui a sua Tarefa</h1>
      </div>
      <FormTasks />
    </main>
  )
}
