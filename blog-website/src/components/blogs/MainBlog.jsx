import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeadingOfBlogs from './components/HeadingOfBlogs';
import BlogRenderInSingleCard from './components/Blogs';
import SelectedBlog from './components/SelectedBlog';



  function MainBlog() {
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

  export default MainBlog
