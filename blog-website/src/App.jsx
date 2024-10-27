import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadingOfBlogs from './components/HeadingOfBlogs'
// import Blogs from './components/Blogs'
import BlogRenderInSingleCard from './components/Blogs'

// import SelectedBlog from './components/SelectedBlog'



function App() {

  return (
    <div>
      <HeadingOfBlogs/>
      <BlogRenderInSingleCard/>
      {/* <Blogs></Blogs> */}
      {/* <SelectedBlog/> */}
    </div>
  )
}

export default App
