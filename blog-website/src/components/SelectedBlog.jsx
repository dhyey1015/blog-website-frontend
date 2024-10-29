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
                
               {/* <div className="blog-card-header">
                    <div className="blog-category1">
                        <span>
                            {blog.category}
                        </span>
                    </div>
                    <div className="blog-title1">
                        <h3>{blog.title}</h3>
                    </div>
                    <div className="blog-author1-date1">
                        <span><b>By</b> {blog.author} | <b>Date:</b> {blog.date}</span>
                    </div>
                    <br />
                    <div className="blog-content1">
                        <p>{blog.content}</p>
                    </div>
                    <SyntaxHighlighter language="javascript" style={atomOneLight}>
                        {blog.codeString}
                    </SyntaxHighlighter>
                    <div className="blog-content1">
                        <p>{blog.content}</p>
                    </div>
                    <div className="image-class">
                        <img  src={random} alt="" />
                    </div>
                    <div className="blog-content1">
                        <p>{blog.content}</p>
                    </div>
                    <div className="video-class">
                        <video autoPlay loop muted controls width="100%">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="blog-content1">
                        <BlogRenderer/>
                    </div>
                   
                    <br/>
                </div> */}
                <div>
                    <BlogRenderer/>
                </div>

            </div>

        </div>
    )
}

export default SelectedBlog;