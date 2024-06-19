'use client'
import React from 'react'
import ButtonLogout from './ButtonLogout'

export default function Header() {
  return (
    <header>
      <div className="navbar bg-amber-600">
        <div className="flex-none">
          <ButtonLogout />
        </div>
        <div className="flex-1">
          <a href='/dashboard' className="btn btn-ghost text-xl text-zinc-50">
            Gerenciador de Tarefas
          </a>
        </div>
      </div>
    </header>
  )
}
