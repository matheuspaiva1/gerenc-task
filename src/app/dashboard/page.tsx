import React from 'react'
import Header from '../components/Header'
import { signIn } from 'next-auth/react'

export default function Page() {
  return (
    <main>
      <Header/>
      Olá, {signIn.name}
    </main>
  )
}
