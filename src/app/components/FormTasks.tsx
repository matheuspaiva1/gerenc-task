'use client'
import React, { useState } from 'react'
import ButtonAddTask from './ButtonAddTask'

export default function FormTasks() {
  const [value, setValue] = useState('');

  

  const getValue= (e: any) =>{
    setValue(e.target.value);
  }

  return (
      <form className="flex items-center mt-4 " onSubmit={getValue}>
        <input 
        onChange={getValue}
        value={value} 
        type="text" 
        placeholder="Digite aqui" 
        className="input input-bordered input-info max-w-4xl bg-zinc-50 mx-32 py-4 w-full " />
        <ButtonAddTask type="submit" title="Adicionar tarefa"/>
      </form>
  )
}
