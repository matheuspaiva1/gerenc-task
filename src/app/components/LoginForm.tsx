"use client"
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { FormEvent } from 'react'

export default function LoginForm() {
  const searchParams = useSearchParams()

  const error = searchParams.get('error')
  async function login (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard"
    })
  }
  return (
    <form onSubmit={login} className="bg-indigo-950 p-12 rounded-xl w-96 max-w-full flex justify-center items-center flex-col gap-4 mt-36 ">
      <h1 className='font-bold text-xl text-amber-400 '>Faça seu Login</h1>
      <label className="input input-bordered bg-slate-100 flex items-center gap-2 bg-base-100 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input name='email' type="text" className="grow bg-base-100" placeholder="Email" />
      </label>
      <label className="input input-bordered bg-slate-100 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input name='password' type="password" className="grow" placeholder='Senha'/>
      </label>
      <button type='submit' className='btn btn-primary bg-amber-500 border-none text-zinc-50 w-full rounded-3xl'>Login</button>
      {error === "CredentialsSignin" && (
        <div className='text-red-600'>Erro no Login</div>
      )}
    </form>
  )
}
