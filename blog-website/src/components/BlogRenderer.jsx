// ./blog-website/src/components/BlogRenderer.jsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogRenderer(){
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/data/content/blog1.md')  // Note: Absolute path from public folder
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogRenderer;

