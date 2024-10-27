import React from "react"
import './SelectedBlog.css'

function SelectedBlog(){
    const blogs = [
        {
          id: 1,
          title: "Getting Started with React",
          author: "Jane Doe",
          date: "2024-10-20",
          category: "Development",
          content: "React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know."
        }
    ]

    console.log()
  
    return(

        <div className="handle-layout" >
            <div className="go-back-button">
                <button> Go Back</button>
            </div>

            <div className="handle-layout-card">
                <div className="blog-main-card">
                    <div className="blog-category1">
                        <span>{blogs[0].category}</span>
                    </div>
                    <div className="blog-title1">
                        <h3>{blogs[0].title}</h3>
                    </div>
                    <div className="blog-author1">
                        <span><b>By</b> {blogs[0].author}</span>
                    </div>
                    <br />
                    <div className="blog-date1">
                        <span><b>Date:</b> {blogs[0].date}</span>
                    </div>
                    <br />
                    <div className="blog-content1">
                        {blogs[0].content}
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default SelectedBlog;