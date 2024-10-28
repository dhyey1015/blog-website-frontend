import React from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogsdata.js'
import './SelectedBlog.css'

function SelectedBlog(){
    const { id } = useParams();
    const navigate = useNavigate();
    
    const blog = blogs.find(function(blog){
        return blog.id === parseInt(id)
    });
    if (!blog) {
        return <div>Blog post not found</div>;
    }
    return(

        <div className="handle-layout" >
            <div className="go-back-button">
                <button onClick={() => navigate(-1)}> Go Back</button>
            </div>

            <div className="handle-layout-card">
                <div className="blog-main-card">
                    <div className="blog-category1">
                        <span>{blog.category}</span>
                    </div>
                    <div className="blog-title1">
                        <h3>{blog.title}</h3>
                    </div>
                    <div className="blog-author1">
                        <span><b>By</b> {blog.author}</span>
                    </div>
                    <br />
                    <div className="blog-date1">
                        <span><b>Date:</b> {blog.date}</span>
                    </div>
                    <br />
                    <div className="blog-content1">
                        {blog.content}
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default SelectedBlog;