import React from 'react'
import Header from '../components/Header'
import { signIn } from 'next-auth/react'

export default function Page() {
  return (
    <main className='bg-zinc-100 h-screen'>
      <Header/>
      <h1 className='mt-8'>Olá, {signIn.name}</h1>
    </main>
  )
}
