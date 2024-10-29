  import React from 'react'
  import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  import './App.css'
  import HeadingOfBlogs from './components/HeadingOfBlogs'
  import BlogRenderInSingleCard from './components/Blogs'
  import RenderImage from './components/RenderImage'


  import SelectedBlog from './components/SelectedBlog'



  function App() {
    return (
      <Router>
        <div>
          <HeadingOfBlogs />
          <Routes>
            <Route path="/" element={<BlogRenderInSingleCard />} />
            <Route path="/blog/:id" element={<SelectedBlog />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App
