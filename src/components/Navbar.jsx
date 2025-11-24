import React from 'react';
import ThemeToggle from './ThemeToggle'; // Ensure path sahi ho

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Logo / Site name */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ModeStudy</h1>

      {/* Navigation Links */}
      <div className="flex space-x-4 items-center">
        <a
          href="/"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="/courses"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
        >
          Courses
        </a>
        <a
          href="/about"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
        >
          About
        </a>

        {/* Dark/Light Mode Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}