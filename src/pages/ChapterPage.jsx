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

  const resourceSections = [
    { title: 'Video Lectures', items: chapter.lectures },
    { title: 'Notes', items: chapter.notes },
    { title: 'DPP PDFs', items: chapter.dppPdfs },
    { title: 'DPP Videos', items: chapter.dppVideos },
    { title: 'DPP Quizzes', items: chapter.dppQuizzes },
    { title: 'Sheets', items: chapter.sheets },
  ]

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

      {/* Horizontal Resource Sections */}
      <div className="space-y-8">
        {resourceSections.map(section => (
          section.items?.length > 0 && (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <div className="flex overflow-x-auto gap-4 pb-2">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link || '#'}
                    className="min-w-[200px] border rounded-lg p-3 bg-white dark:bg-slate-900 shadow"
                  >
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded"
                      />
                    )}
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
