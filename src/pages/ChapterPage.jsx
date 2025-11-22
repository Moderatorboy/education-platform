import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function ChapterVideosPage() {
  const { batchId, subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  const subject = batch?.subjects.find(s => s.id === subjectId)
  const chapter = subject?.chapters.find(c => c.id === chapterId)
  if (!chapter) return <div>Chapter not found</div>

  const [activeTab, setActiveTab] = useState('videos')

  const tabs = [
    { key: 'videos', label: 'Videos' },
    { key: 'dppNotes', label: 'DPP Notes' },
    { key: 'dppVideos', label: 'DPP Videos' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">Back To Chapters</button>
        <h2 className="text-xl font-bold">{chapter.name}</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
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
            <Link
              key={index}
              to={video.link || '#'}
              className="flex gap-4 items-center border rounded-lg p-3 bg-white dark:bg-slate-900 shadow hover:bg-gray-100 dark:hover:bg-slate-800"
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
            </Link>
          ))}
        </div>
      )}

      {/* Other tabs can be filled similarly */}
      {activeTab === 'dppNotes' && (
        <div className="space-y-3">
          {chapter.dppNotes?.map((note, index) => (
            <Link key={index} to={note.link || '#'} className="block border rounded p-3">
              {note.title}
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'dppVideos' && (
        <div className="space-y-3">
          {chapter.dppVideos?.map((dpp, index) => (
            <Link key={index} to={dpp.link || '#'} className="block border rounded p-3">
              {dpp.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
