import Image from 'next/image'
import React from 'react';


export default function FeaturedArticle() {
  return (
    <section className="py-12 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Featured Article</h2>
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <Image src="/placeholder.svg?height=400&width=600" alt="Featured Article" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Breaking: Major Scientific Discovery Shakes the World</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Scientists have made a groundbreaking discovery that could revolutionize our understanding of the universe. This new finding challenges long-held beliefs and opens up exciting possibilities for future research.</p>
            <a href="#" className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-amber-700 transition duration-300">Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

