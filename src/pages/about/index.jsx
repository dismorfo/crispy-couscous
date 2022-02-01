import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import contentMd from './content.md'

export default function About() {

  const label = 'About';

  const [ content, setContent ] = useState('');

  useEffect(() => {
    fetch(contentMd).then((response) => response.text()).then((text) => {
      setContent(text);
    });
  });

  return (
    <>
      <main className='main container-fluid'>
        <h2 className='page-title'>{label}</h2>
        <div className='maintext'>
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
      </main>
    </>
  );
}
