'use client'
import React, { useContext, useState } from 'react'
import ButtonAddTask from './ButtonAddTask'
import AppContext from '../contexts/appContext'

export default function FormTasks() {
  const {valueInput, setValueInput} = useContext(AppContext)
  

  const getValue= (e: any) =>{
    setValueInput(e.target.value);
  }

  return (
      <form className="flex items-center mt-4 " onSubmit={getValue}>
        <input 
        onChange={getValue}
        value={valueInput} 
        type="text" 
        placeholder="Digite aqui" 
        className="input input-bordered input-info max-w-4xl bg-zinc-50 mx-32 py-4 w-full " />
        <ButtonAddTask type="submit" title="Adicionar tarefa"/>
      </form>
  )
}
