import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadingOfBlogs from './components/HeadingOfBlogs'
import BlogRenderInSingleCard from './components/Blogs'
import RenderImage from './components/RenderImage'


import SelectedBlog from './components/SelectedBlog'



function App() {

  return (
    <div>
      <HeadingOfBlogs/>
      {/* <RenderImage/> */}
      <BlogRenderInSingleCard/>
      {/* <Blogs></Blogs> */}
      {/* <SelectedBlog/> */}
    </div>
  )
}

export default App
