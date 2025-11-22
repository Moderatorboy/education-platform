import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function SubjectPage(){
  const { batchId, subjectId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b=> b.id === batchId)
  const subject = batch?.subjects.find(s=> s.id === subjectId)
  if(!subject) return <div>Subject not found</div>
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={()=> navigate(-1)} className="px-3 py-2 border rounded">Back</button>
        <h2 className="text-2xl font-bold">{subject.name}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {subject.chapters.map(c=> (
          <Link key={c.id} to={`/batch/${batchId}/subject/${subjectId}/chapter/${c.id}`} className="block border rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-100 dark:bg-slate-800">
  {c.photo ? (
    <img src={c.photo} alt={c.name} className="w-full h-full object-contain"/>
  ) : (
    <span className="text-center">{c.name}</span>
  )}
</div>
            <div className="py-3 text-center">
  <h3 className="text-lg font-bold text-slate-800 dark:text-white">{c.name}</h3>
</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
