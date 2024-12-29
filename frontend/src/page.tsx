import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedArticle from './components/FeaturedArticle'
import NewsCategories from './components/NewsCategories'
import Footer from './components/Footer'
import React from 'react';
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <Hero />
      <FeaturedArticle />
      <NewsCategories />
      <Footer />
    </div>
  )
}

