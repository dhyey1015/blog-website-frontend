import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogsdata.js'
import './SelectedBlog.css'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import random from '../images/random.png'
import video from '../videos/random.mp4'
import ReactMarkdown from 'react-markdown'
import BlogRenderer from "./BlogRenderer.jsx";
// import BlogRenderer from "./BlogRenderer.jsx";
// import Markdown from "react-markdown";

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
        <div className="blog-container1" >
            <div className="blog-card">
                <div className="go-back-button">
                    <i className="arrow left"></i><button onClick={() => navigate(-1)}> Go Back</button>
                </div>
                <div>
                    <BlogRenderer id={id} />
                </div>

            </div>

        </div>
    )
}

export default SelectedBlog;