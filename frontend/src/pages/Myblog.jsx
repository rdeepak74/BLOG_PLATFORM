import React from 'react'
import BlogCard from '../components/BlogCard'

function Myblog() {
  return (
    <div className="flex flex-col justify-center items-center min-h-svh mt-10">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          My Blog
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      <BlogCard />
    </div>
  )
}

export default Myblog
