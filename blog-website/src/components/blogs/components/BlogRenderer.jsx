// ./blog-website/src/components/BlogRenderer.jsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'; // converts the markdown to xml
import yaml from 'js-yaml'; // used to load data inside a variable
import './SelectedBlog.css'
import rehypeRaw from 'rehype-raw'; //used to get the raw html in file to work in react component
import remarkToc from 'remark-toc'; // find the table of contents
import remarkSlug from 'remark-slug'; // generates a unique id for each contents in table of contents


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
      <div className='blog-description'>
        {metadata.description && <p>{metadata.description}</p>}
      </div>
      <div className="blog-author1-date1">
        {metadata.author && <p>{`Author: ${metadata.author} | Date: ${metadata.date}`}</p>}
      </div>
      <div className='.blog-content1'>
        <ReactMarkdown 
        children={content} 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkToc, remarkSlug]} 
        
        >{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogRenderer;

