// ./blog-website/src/components/BlogRenderer.jsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import './SelectedBlog.css'


function BlogRenderer({id}){
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetch(`/data/content/blog${id}.md`)
      .then((response) => response.text())
      .then((text) => {
        const part = text.split('---');
        if (part.length >= 3) {
          const meta = yaml.load(part[1]); 
          setMetadata(meta);
          setContent(part.slice(2).join('---'));
        }
      });
  }, []);

  return (
    <div>
      <div className="blog-title1">
        {metadata.title && <h1>{metadata.title}</h1>}
      </div>
      <div className="blog-author1-date1">
        {metadata.author && <p>{`Author: ${metadata.author} | Date: ${metadata.date}`}</p>}
        {metadata.description && <p>{metadata.description}</p>}
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogRenderer;

