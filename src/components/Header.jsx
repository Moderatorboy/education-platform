import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header({dark, setDark}){
  const navigate = useNavigate()
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex-1 text-center">
          <h1 className="mx-auto text-3xl font-extrabold gradient-changing inline-block px-6 py-2 rounded-2xl text-white">DUDE STUDY</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={()=> setDark(!dark)} className="px-3 py-2 border rounded-md">
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  )
}
