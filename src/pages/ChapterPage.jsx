import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function ChapterVideosPage() {
  const { batchId, subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  const subject = batch?.subjects.find(s => s.id === subjectId)
  const chapter = subject?.chapters.find(c => c.id === chapterId)
  if (!chapter) return <div>Chapter not found</div>

  const [activeTab, setActiveTab] = useState('videos')
  const [activeVideo, setActiveVideo] = useState(null)

  const tabs = [
    { key: 'videos', label: 'Videos' },
    { key: 'Notes', label: 'Notes' },
    { key: 'dppQuiz', label: 'DPP Quiz' },
    { key: 'dppNotes', label: 'DPP PDF' },
    { key: 'dppVideos', label: 'DPP Videos' },
    { key: 'Sheets', label: 'Sheets' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">Back To Chapters</button>
        <h2 className="text-xl font-bold">{chapter.name}</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key)
              setActiveVideo(null)
            }}
            className={`px-4 py-2 rounded border ${
              activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'videos' && (
        <div className="space-y-4">
          {chapter.lectures.map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(video)}
              className="w-full text-left flex gap-4 items-center border rounded-lg p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <div className="w-40 h-24 bg-gray-200 dark:bg-slate-800 overflow-hidden rounded">
                <img
                  src={chapter.photo}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base">{video.title}</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: {video.duration} • Date: {video.date}
                </div>
              </div>
            </button>
          ))}

          {activeVideo && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Now Playing: {activeVideo.title}</h3>
              <div className="aspect-video border rounded overflow-hidden">
                <iframe
                  src={activeVideo.video}
                  title={activeVideo.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'Notes' && (
        <div className="space-y-3">
          {chapter.notes?.map((note, index) => (
            <a
              key={index}
              href={note.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {note.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppNotes' && (
        <div className="space-y-3">
          {chapter.dpp?.map((dpp, index) => (
            <a
              key={index}
              href={dpp.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {dpp.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppVideos' && (
        <div className="space-y-3">
          {chapter.dppVideos?.map((dpp, index) => (
            <a
              key={index}
              href={dpp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {dpp.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppQuiz' && (
        <div className="space-y-3">
          {chapter.quizzes?.map((quiz, index) => (
            <div key={index} className="border rounded p-3 bg-white dark:bg-slate-900 shadow">
              <h4 className="font-semibold mb-2">{quiz.title}</h4>
              <ul className="list-disc ml-5">
                {quiz.questions.map((q, i) => (
                  <li key={i}>
                    {q.q} (Answer: {q.options[q.ans]})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Sheets' && (
        <div className="space-y-3">
          {chapter.sheets?.map((sheet, index) => (
            <a
              key={index}
              href={sheet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {sheet.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
