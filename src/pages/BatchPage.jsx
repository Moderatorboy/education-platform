import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)

  if (!batch) return <div className="p-4">Batch not found</div>

  return (
    <div className="p-4 bg-white dark:bg-slate-900 min-h-screen">
      {/* Branding */}
      <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        DUDE STUDY
      </h1>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-2 border rounded hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold">{batch.title}</h2>
      </div>

      {/* Subjects Grid */}
      {batch.subjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {batch.subjects.map(s => (
            <Link
              key={s.id}
              to={`/batch/${batchId}/subject/${s.id}`}
              className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Image container */}
              <div className="relative aspect-video bg-gray-100 dark:bg-slate-800">
                {s.photo && (
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Motivational overlay */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                  🔴 LIVE
                </div>
              </div>

              {/* Text container */}
              <div className="p-3 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-center">{s.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
          {batch.fallback || "No subjects available yet."}
        </div>
      )}
    </div>
  )
}
