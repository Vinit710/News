
import React from 'react';
export default function Hero() {
    return (
      <header className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Welcome to NewsHub</h1>
          <p className="mt-6 text-xl max-w-3xl">Stay informed with the latest news and updates from around the world. Discover trending stories, in-depth analysis, and breaking news across various categories.</p>
          <div className="mt-10">
            <a href="#" className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition duration-300">Start Reading</a>
          </div>
        </div>
      </header>
    )
  }
  
  