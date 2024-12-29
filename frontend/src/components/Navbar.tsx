import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react';
export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">📰 NewsHub</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium">Trending</a>
                <a href="#" className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input type="text" placeholder="Search..." className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

