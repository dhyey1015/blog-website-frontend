export const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "Jane Doe",
      date: "Oct 10, 2023",
      category: "Development",
      content: "React is a powerful library for building user interfaces. In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.In this blog post, we'll explore the fundamentals of React and how to get started with your first React application. We'll cover components, state management, and basic hooks that every React developer should know.",
      codeString: `
                import React, { useState, useEffect } from 'react';

                function CounterApp() {
                const [count, setCount] = useState(0);

                useEffect(() => {
                    console.log(\`Count value: \${count}\`);
                }, [count]);

                const incrementCount = () => {
                    setCount(count + 1);
                };

                return (
                    <div>
                    <h1>React Counter</h1>
                    <p>Current Count: {count}</p>
                    <button onClick={incrementCount}>Increment</button>
                    </div>
                );
                }

                export default CounterApp;
            `
    },
    {
      id: 2,
      title: "The Future of AI",
      author: "John Smith",
      date: "Oct 10, 2024",
      category: "Technology",
      content: "Artificial Intelligence is rapidly evolving and changing the way we live and work. This post explores current AI trends and makes predictions about where the technology is headed in the next decade. We'll discuss machine learning, neural networks, and their practical applications."
    },
    {
      id: 3,
      title: "Web Development Best Practices",
      author: "Alex Johnson",
      date: "Oct 10, 2023",
      category: "Development",
      content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
    },
    {
      id: 4,
      title: "Web Development Best Practices",
      author: "Alex Johnson",
      date: "Oct 10, 2023",
      category: "Development",
      content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
    },
    {
      id: 5,
      title: "Web Development Best Practices",
      author: "Alex Johnson",
      date: "Oct 10, 2023",
      category: "Development",
      content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
    },
    {
      id: 6,
      title: "Web Development Best Practices",
      author: "Alex Johnson",
      date: "Oct 10, 2023",
      category: "Development",
      content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
    },
    {
      id: 7,
      title: "Web Development Best Practices",
      author: "Alex Johnson",
      date: "Oct 10, 2023",
      category: "Development",
      content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
    },
    {
        id: 8,
        title: "Web Development Best Practices",
        author: "Alex Johnson",
        date: "Oct 10, 2023",
        category: "Development",
        content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
      },
      {
        id: 9,
        title: "Web Development Best Practices",
        author: "Alex Johnson",
        date: "Oct 10, 2023",
        category: "Development",
        content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
      },
      {
        id: 10,
        title: "Web Development Best Practices",
        author: "Alex Johnson",
        date: "Oct 10, 2023",
        category: "Development",
        content: "Following web development best practices is crucial for creating maintainable and scalable applications. In this comprehensive guide, we'll cover everything from code organization to performance optimization techniques that will help you build better web applications."
      }
  ];