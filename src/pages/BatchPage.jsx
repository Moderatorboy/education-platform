import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  if (!batch) return <div>Batch not found</div>

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-2 border rounded"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold">{batch.name}</h2>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {batch.subjects.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block border rounded-lg overflow-hidden"
          >
            {/* Image container */}
            <div className="aspect-video bg-gray-100 dark:bg-slate-800">
  {s.photo ? (
    <img
      src={s.photo}
      alt={s.name}
      className="w-full h-full object-cover"
    />
  ) : null}
</div>

            {/* Text container */}
            <div className="p-3 bg-white dark:bg-slate-900">
              <h3 className="font-bold text-center">{s.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
