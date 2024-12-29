import React from 'react';
export default function NewsCategories() {
  const categories = ['Politics', 'Technology', 'Sports', 'Health', 'Entertainment', 'Science', 'Business', 'Environment']

  return (
    <section className="py-12 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a key={index} href="#" className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

