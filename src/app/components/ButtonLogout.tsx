"use client"
import { signOut } from 'next-auth/react';
import React from 'react'
import { CiLogout } from "react-icons/ci";

export default function ButtonLogout() {
  return (
    <button     
    onClick={() => signOut()} 
    className="btn btn-square btn-ghost">
        <CiLogout className="h-6 w-6 text-zinc-50" />
    </button>
  )
}
