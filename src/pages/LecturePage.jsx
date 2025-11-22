import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function LecturePage() {
  const { batchId, subjectId, chapterId, lectureId } = useParams()
  const navigate = useNavigate()

  const batch = SAMPLE.batches.find(b => b.id === batchId)
  const subject = batch?.subjects.find(s => s.id === subjectId)
  const chapter = subject?.chapters.find(c => c.id === chapterId)
  const lecture = chapter?.lectures.find(l => l.id === lectureId)

  const [done, setDone] = useState(() => {
    const key = `ms-progress-${chapterId}`
    const obj = JSON.parse(localStorage.getItem(key) || '{}')
    return !!obj[lectureId]
  })

  if (!lecture) return <div className="p-4">Lecture not found</div>

  function toggle() {
    const key = `ms-progress-${chapterId}`
    const obj = JSON.parse(localStorage.getItem(key) || '{}')
    if (done) {
      delete obj[lectureId]
    } else {
      obj[lectureId] = Date.now()
    }
    localStorage.setItem(key, JSON.stringify(obj))
    setDone(!done)
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">Back</button>
        <h2 className="text-xl font-bold">{lecture.title}</h2>
        <div className="ml-auto" />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Video Section */}
        <div className="md:col-span-2">
          <div className="aspect-video bg-black rounded overflow-hidden">
            <iframe
              src={lecture.video + '?autoplay=1'}
              title={lecture.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              frameBorder="0"
            />
          </div>

          <div className="flex items-center gap-3 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={done} onChange={toggle} />
              <span>Mark as complete</span>
            </label>
            <Link
              to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}`}
              className="ml-auto text-sm underline"
            >
              Back to chapter
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="border p-3 rounded bg-white dark:bg-slate-900 shadow">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Notes:</strong>{' '}
              {chapter.notes[0]?.file ? (
                <a href={chapter.notes[0].file} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                  {chapter.notes[0].title}
                </a>
              ) : (
                'Not available'
              )}
            </li>
            <li>
              <strong>DPP:</strong>{' '}
              {chapter.dpp[0]?.file ? (
                <a href={chapter.dpp[0].file} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                  {chapter.dpp[0].title}
                </a>
              ) : (
                'Not available'
              )}
            </li>
            <li>
              <strong>Quiz:</strong>{' '}
              {chapter.quizzes?.length > 0 ? (
                <Link to="#" className="underline text-blue-600">Start Quiz</Link>
              ) : (
                'Not available'
              )}
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
