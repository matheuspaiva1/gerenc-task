'use client'
import React, { ChangeEvent, useContext, useState } from 'react'
import ButtonAddTask from './ButtonAddTask'
import AppContext from '../contexts/appContext'

export default function FormTasks() {
  const { setValueInput, valueInput , itemList, setItemList, itemsHandler, id, setId } = useContext(AppContext)

  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value)
  }

  const createNewItems = (valueInput: any) => {
    const newItems = {value: valueInput, id: id}
    setId(id + 1)
    itemsHandler(newItems)
  }

  return (
    <form className="mt-4">
      <input
        onChange={getValue}
        type="text"
        placeholder="Digite aqui"
        className="input input-bordered input-info max-w-4xl bg-zinc-50 mx-28 py-4 w-full "
      />
      <ButtonAddTask title="Adicionar tarefa" onClick={() => createNewItems(valueInput)}/>

    </form>
  )
}
