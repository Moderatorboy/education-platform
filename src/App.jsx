import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import BatchPage from './pages/BatchPage'
import SubjectPage from './pages/SubjectPage'
import ChapterPage from './pages/ChapterPage'
import LecturePage from './pages/LecturePage'
import Header from './components/Header'

export default function App(){
  const [dark, setDark] = useState(()=> localStorage.getItem('ms-dark') === '1')
  useEffect(()=> {
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('ms-dark', dark ? '1' : '0')
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Header dark={dark} setDark={setDark}/>
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/batch/:batchId" element={<BatchPage/>} />
          <Route path="/batch/:batchId/subject/:subjectId" element={<SubjectPage/>} />
          <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId" element={<ChapterPage/>} />
          <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId/lecture/:lectureId" element={<LecturePage/>} />
        </Routes>
      </main>
    </div>
  )
}