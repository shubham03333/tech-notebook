import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PrintView = ({ note }) => {
  if (!note) return null;

  return (
    <div className="print-view">
      <h1>{note.title}</h1>
      <p><strong>Category:</strong> {note.category}</p>
      <p><strong>Tags:</strong> {note.tags.join(', ')}</p>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {note.content}
      </ReactMarkdown>
    </div>
  );
};

export default PrintView;
