import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './componets/Header'
import React from 'react'
import Login from './componets/Login'
import Register from './componets/Register'
import Blogs from './componets/Blogs'
import UserBlogs from './componets/UserBlogs'
import AddBlogs from './componets/AddBlogs'
import BlogDetail from './componets/BlogDetail'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {isLoggedIn && (
            <>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/myBlogs" element={<UserBlogs />}></Route>
              <Route path="/myBlogs/:id" element={<BlogDetail />}></Route>
              <Route path="/blogs/add" element={<AddBlogs />} />
            </>
          )}
          <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
