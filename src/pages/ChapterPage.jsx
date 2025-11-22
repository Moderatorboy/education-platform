import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

function progressForChapter(ch){
  // compute percent based on lectures completed in localStorage
  const key = `ms-progress-${ch.id}`
  const done = JSON.parse(localStorage.getItem(key) || '{}')
  const total = ch.lectures.length || 1
  const completed = Object.keys(done).length
  return Math.round((completed/total)*100)
}

export default function ChapterPage(){
  const { batchId, subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b=> b.id === batchId)
  const subject = batch?.subjects.find(s=> s.id === subjectId)
  const chapter = subject?.chapters.find(c=> c.id === chapterId)
  if(!chapter) return <div>Chapter not found</div>
  const pct = progressForChapter(chapter)
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={()=> navigate(-1)} className="px-3 py-2 border rounded">Back</button>
        <h2 className="text-2xl font-bold">{chapter.name} <span className="text-sm ml-3">({pct}% complete)</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-2">Lectures</h3>
          <div className="grid grid-cols-1 gap-3">
            {chapter.lectures.map(l=> (
              <Link key={l.id} to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}/lecture/${l.id}`} className="flex items-center gap-3 border p-3 rounded">
                <div className="w-24 h-16 bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
                  <img src={chapter.photo} alt={l.title} className="object-contain w-full h-full"/>
                </div>
                <div>
                  <div className="font-medium">{l.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="border p-3 rounded">
          <h4 className="font-semibold mb-2">Extras</h4>
          <div>
            <h5 className="font-medium">Notes</h5>
            <ul className="list-disc ml-5">{chapter.notes.map(n=> <li key={n.id}>{n.title}</li>)}</ul>
          </div>
          <div className="mt-3">
            <h5 className="font-medium">DPPs</h5>
            <ul className="list-disc ml-5">{chapter.dpp.map(n=> <li key={n.id}>{n.title}</li>)}</ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
