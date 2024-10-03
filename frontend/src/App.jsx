import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Blog from './pages/Blog'
import Myblog from './pages/Myblog'
import CreatePost from './pages/CreatePost'
import NotpageFound from './pages/NotpageFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/my-blog" element={<Myblog />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotpageFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
