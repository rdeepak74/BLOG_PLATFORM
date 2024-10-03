import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="bg-white-400 p-3 shadow-md">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold">
          <Link to="/">Rai Blog</Link>
        </div>

        <nav className="space-x-4">
          <Link
            to="/"
            className=" bg-red-300 border-1 px-2 py-2 rounded-md hover:text-gray-500"
          >
            Blog Posts
          </Link>
          <Link
            to="/my-blog"
            className=" bg-red-300 border-1 px-2 py-2 rounded-md hover:text-gray-500"
          >
            My Blog{' '}
          </Link>
          <Link
            to="/create-post"
            className=" bg-red-300 border-1 px-2 py-2 rounded-md hover:text-gray-500"
          >
            Creat Post
          </Link>
          <Link
            to="/login"
            className=" bg-red-300 border-1 px-2 py-2 rounded-md hover:text-gray-500"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className=" bg-red-300 border-1 px-2 py-2 rounded-md hover:text-gray-500"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
