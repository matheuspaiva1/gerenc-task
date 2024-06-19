'use client'
import React, { useState, ReactNode } from 'react'
import AppContext from './appContext'

interface ProviderProps{
  children: ReactNode,
}
export default function Providers({children}: ProviderProps){
  const [valueInput, setValueInput] = useState('')

  const value = {
    valueInput,
    setValueInput,
  }

  return (
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>

    
)
}
