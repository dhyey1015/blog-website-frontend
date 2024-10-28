  import React from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  import './App.css'
  import HeadingOfBlogs from './components/HeadingOfBlogs'
  import BlogRenderInSingleCard from './components/Blogs'
  import RenderImage from './components/RenderImage'


  import SelectedBlog from './components/SelectedBlog'



  function App() {

    return (


      <div>
        <HeadingOfBlogs/>
        <RouthingFunction/>
      </div>
      // <div>
      //   <HeadingOfBlogs/>
      //   {/* <RenderImage/> */}
      //   <BlogRenderInSingleCard/>
      //   {/* <Blogs></Blogs> */}
      //   {/* <SelectedBlog/> */}
      // </div>
    )
  }

  function RouthingFunction(){

    return(
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<BlogRenderInSingleCard />} />
          </Routes>
          <Routes>
            <Route path="/blog/:id" element={<SelectedBlog />} />
          </Routes>
        </div>
      </Router>
    )

  }
  export default App
