"use client"
import React from 'react'

export default function ButtonAddTask({...props}) {
  return (
    <button 
    {...props}
    className="btn btn-primary bg-sky-950 text-zinc-50 border-none right-52 absolute"
    type='submit'
    >
      {props.title}
    </button>
  )
}
