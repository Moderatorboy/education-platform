import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({b}){
  return (
    <Link to={`/batch/${b.id}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <div className="bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-xl font-semibold">
        {b.photo ? <img 
  src={b.photo} 
  alt={b.name} 
  className="w-full h-auto object-contain p-2"
/>
 : b.name}
      </div>
      <div className="p-3">
        <h3 className="font-bold">{b.name}</h3>
      </div>
    </Link>
  )
}

export default function Home(){
  const [q, setQ] = useState('')
  const batches = SAMPLE.batches.filter(b=> b.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <div>
      <div className="text-center my-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search batch..." className="w-full max-w-xl mx-auto px-4 py-3 border rounded-full" />
      </div>
      <hr className="my-6"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {batches.map(b=> <BatchCard key={b.id} b={b} />)}
      </div>
    </div>
  )
}
