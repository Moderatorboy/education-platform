import React from 'react'

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded transition-colors duration-300"
    >
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}