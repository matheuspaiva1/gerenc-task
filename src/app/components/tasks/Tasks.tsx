import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";


export default function Tasks() {
  return (
    <div className="card mx-36 mt-4 shadow-xl py-4 bg-zinc-50 text-zinc-800">
      <div className="flex items-center relative">
        <h2 className="card-title py-2 px-6">Fazer tarefas de casa hoje amanha de noite depois</h2>
        <div className="flex items-center gap-4 absolute right-6">
          <button className='btn btn-square bg-zinc-50'>
            <FiEdit className='w-7 h-5'/>
          </button>
          <button className='btn btn-square bg-zinc-50'>
            <CiCircleCheck className='text-green-600 h-12 w-7'/> 
          </button>
        </div>
      </div>
    </div>
  )
}
