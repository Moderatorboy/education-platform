import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

function progressForChapter(ch) {
  const key = `ms-progress-${ch.id}`
  const done = JSON.parse(localStorage.getItem(key) || '{}')
  const total = ch.lectures.length || 1
  const completed = Object.keys(done).length
  return Math.round((completed / total) * 100)
}

export default function ChapterPage() {
  const { batchId, subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  const subject = batch?.subjects.find(s => s.id === subjectId)
  const chapter = subject?.chapters.find(c => c.id === chapterId)
  if (!chapter) return <div>Chapter not found</div>
  const pct = progressForChapter(chapter)

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">Back</button>
        <h2 className="text-2xl font-bold">
          {chapter.name}
          <span className="text-sm ml-3">({pct}% complete)</span>
        </h2>
      </div>

      {/* 🎥 Video Lectures Grid */}
      {chapter.lectures?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">🎥 Video Lectures</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {chapter.lectures.map((l, index) => (
              <Link
                key={index}
                to={l.link || '#'}
                className="block border rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow"
              >
                <div className="aspect-video bg-gray-100 dark:bg-slate-800">
                  <img
                    src={chapter.photo}
                    alt={l.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm text-center">{l.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 📘 Notes, 📄 DPP PDFs, 🎬 DPP Videos, 🧠 DPP Quizzes, 📑 Sheets */}
      <div className="space-y-6">
        {[
          { title: '📘 Notes', items: chapter.notes },
          { title: '📄 DPP PDFs', items: chapter.dppPdfs },
          { title: '🎬 DPP Videos', items: chapter.dppVideos },
          { title: '🧠 DPP Quizzes', items: chapter.dppQuizzes },
          { title: '📑 Sheets', items: chapter.sheets },
        ].map(section => (
          section.items?.length > 0 && (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <div className="grid grid-cols-1 gap-3">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || '#'}
                    className="block w-full px-4 py-3 border rounded-lg bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <div className="font-medium text-base">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
