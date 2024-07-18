'use client'
import React, { useState, ReactNode } from 'react'
import AppContext from './appContext'

interface ProviderProps{
  children: ReactNode,
}
export default function Provider({children}: ProviderProps){
  const [valueInput, setValueInput] = useState(null)
  const [itemList, setItemList] = useState([0])
  const [id, setId] = useState(0)


  const itemsHandler = (item: any) => {
    setItemList([...itemList, item])
  }

  const value = {
    valueInput,
    setValueInput,
    itemList,
    setItemList,
    itemsHandler,
    id,
    setId,

  }

  return (
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
)
}
