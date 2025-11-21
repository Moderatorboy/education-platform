import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function LecturePage(){
  const { batchId, subjectId, chapterId, lectureId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b=> b.id === batchId)
  const subject = batch?.subjects.find(s=> s.id === subjectId)
  const chapter = subject?.chapters.find(c=> c.id === chapterId)
  const lecture = chapter?.lectures.find(l=> l.id === lectureId)
  const [done, setDone] = useState(()=> {
    const key = `ms-progress-${chapterId}`
    const obj = JSON.parse(localStorage.getItem(key) || '{}')
    return !!obj[lectureId]
  })

  useEffect(()=> {
    // handle mobile/hardware back: add popstate listener to ensure navigate works
    const onpop = ()=> {}
    window.addEventListener('popstate', onpop)
    return ()=> window.removeEventListener('popstate', onpop)
  },[])

  if(!lecture) return <div>Lecture not found</div>

  function toggle(){
    const key = `ms-progress-${chapterId}`
    const obj = JSON.parse(localStorage.getItem(key) || '{}')
    if(done) delete obj[lectureId]
    else obj[lectureId] = Date.now()
    localStorage.setItem(key, JSON.stringify(obj))
    setDone(!done)
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={()=> navigate(-1)} className="px-3 py-2 border rounded">Back</button>
        <h2 className="text-xl font-bold">{lecture.title}</h2>
        <div className="ml-auto">{/* space */}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="aspect-video bg-black">
            <iframe src={lecture.video + '?autoplay=1'} title={lecture.title} className="w-full h-full" allow="autoplay; encrypted-media" frameBorder="0"></iframe>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={done} onChange={toggle} />
              <span>Mark as complete</span>
            </label>
            <Link to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}`} className="ml-auto text-sm underline">Back to chapter</Link>
          </div>
        </div>
        <aside className="border p-3 rounded">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><strong>Notes:</strong> {chapter.notes[0]?.title}</li>
            <li><strong>DPP:</strong> {chapter.dpp[0]?.title}</li>
            <li><strong>Quiz:</strong> <Link to="#" className="underline">Start Quiz</Link></li>
          </ul>
        </aside>
      </div>
    </div>
  )
}