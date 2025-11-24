import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

export default function Header({ dark, setDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site Name */}
          <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            ModeStudy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-900 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle dark={dark} setDark={setDark} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 text-slate-900 dark:text-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 transition-colors duration-300">
          <nav className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
