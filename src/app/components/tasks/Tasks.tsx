'use client'
import AppContext from '@/app/contexts/appContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { FiEdit } from 'react-icons/fi'

export default function Tasks() {
  const { valueInput, setValueInput, itemList, setItemList } =
    useContext(AppContext)

  return (
    <div className="card mx-28 mt-4 shadow-xl py-4 bg-zinc-50 text-zinc-800 w-full max-w-5xl">
      {itemList.map((item: any) => (
        // eslint-disable-next-line react/jsx-key
          <div className="flex items-center relative" key={item.id}>
            <h2 className="card-title py-2 px-6"> {item.value}</h2>
            <div className="flex items-center gap-4 absolute right-4">
              <Link href="/editTasks" className="btn btn-square bg-zinc-50">
                <FiEdit className="w-7 h-5" />
              </Link>
              <Link href="/validTasks" className="btn btn-square bg-zinc-50">
                <CiCircleCheck className="text-green-600 h-12 w-7" />
              </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          
      ))}
    </div>
  )
}
