import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Blogs.css'
import RenderImage from "./RenderImage";
import { blogs } from '../data/blogsdata.js';
import yaml from 'js-yaml';

function Blogs(){

  const [metadata, setMetadata] = useState([])
  useEffect(function(){
      const fetchBlogs = async () =>{
        const allMetadata = await Promise.all(
          blogs.map(async (blog) => {
            const response = await fetch(`/data/content/blog${blog.id}.md`)
            const text = await response.text()
            const part = text.split('---')
            if(part.length >= 3){
              return yaml.load(part[1])
            }
            return null
          })
        )
        setMetadata(allMetadata.filter(Boolean))
      }
      fetchBlogs()
  },[])

      return(
        <div className="blog-container">
            {metadata.map((meta) => (
                <RenderBlogs 
                    key={meta.id} 
                    id={meta.id} 
                    category={meta.category} 
                    title={meta.title} 
                    author={meta.author} 
                    date={meta.date} 
                    content={meta.description} 
                />
            ))}
        </div>
      )
}

function RenderBlogs(props){

    return(
        <div className="main-card">
            <div className="blog-category">
              <span>{props.category}</span>
            </div>
            <div className="blog-title">
              <h3>{props.title}</h3>
            </div>
            <div className="blog-author">
              <span><b>By</b> {props.author}</span>
            </div>
            <div className="blog-date"> 
              <span><b>Date:</b> {props.date}</span>
            </div>
            <br />
            <div className="blog-content">
              <article>{props.content}</article>
            </div>
            <br/>
            <div className="blog-button">
              <Link to={`/blog/${props.id}`} className="card-button">
                  Read More
              </Link>
            </div>
        </div>
    )
}

function BlogRenderInSingleCard(){
  
  return(
    <div className="blog-single-parent-card">
      <div className="blog-parent-card">
        <Blogs/>
      </div>
    </div>
    
  )
}

export default BlogRenderInSingleCard;