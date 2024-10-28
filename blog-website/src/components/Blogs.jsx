import React, { useState } from "react";
import './Blogs.css'
import RenderImage from "./RenderImage";

function Blogs(){
    const blogs = [
        {
          id: 1,
          title: "Getting Started with React",
          author: "Jane Doe",
          date: "2024-10-20",
          category: "Development",
          content: "React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know."
        },
        {
          id: 2,
          title: "The Future of AI",
          author: "John Smith",
          date: "2024-10-25",
          category: "Technology",
          content: "Artificial Intelligence is rapidly evolving and changing the way we live and work. This post explores current AI trends and makes predictions about where the technology is headed in the next decade. We'll discuss machine learning, neural networks, and their practical applications."
        },
        {
          id: 3,
          title: "Web Development Best Practices",
          author: "Alex Johnson",
          date: "2024-10-26",
          category: "Development",
          content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
        },
        {
          id: 4,
          title: "Web Development Best Practices",
          author: "Alex Johnson",
          date: "2024-10-26",
          category: "Development",
          content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
        },
        {
          id: 5,
          title: "Web Development Best Practices",
          author: "Alex Johnson",
          date: "2024-10-26",
          category: "Development",
          content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
        },
        {
          id: 6,
          title: "Web Development Best Practices",
          author: "Alex Johnson",
          date: "2024-10-26",
          category: "Development",
          content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
        },
        {
          id: 7,
          title: "Web Development Best Practices",
          author: "Alex Johnson",
          date: "2024-10-26",
          category: "Development",
          content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
        }
      ];

      return(
        <div className="blog-container">
            {blogs.map(function(blog){
              return <RenderBlogs key={blog.id} category={blog.category} title = {blog.title} author = {blog.author} date = {blog.date} content= {blog.content}></RenderBlogs>
            })}
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
              <button className="card-button">Read More</button>
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