'use client'
import React, { useContext, useState } from 'react'
import ButtonAddTask from './ButtonAddTask'
import AppContext from '../contexts/appContext'

export default function FormTasks() {
  const { valueInput, setValueInput } = useContext(AppContext)

  const getValue = (event: any) => {
    setValueInput(event.target.value)
  }

  return (
    <form className="mt-4" onSubmit={setValueInput}>
      <input
        onChange={getValue}
        value={valueInput}
        type="text"
        placeholder="Digite aqui"
        className="input input-bordered input-info max-w-4xl bg-zinc-50 mx-28 py-4 w-full "
      />
      <ButtonAddTask type="submit" title="Adicionar tarefa"/>

    </form>
  )
}
