import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai, ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeHighlight = ({
  children,
  lang = 'javascript',
  darkMode = false,
  showLineNumbers = false,
  className = ''
}) => {
  // Remove potential leading/trailing whitespace from code
  const code = React.Children.toArray(children).join('').trim();

  // Supported languages (can be expanded)
  const supportedLanguages = [
    'javascript', 'js', 'jsx', 'typescript', 'ts', 'tsx',
    'python', 'py', 'java', 'c', 'cpp', 'cs', 'php',
    'ruby', 'go', 'swift', 'kotlin', 'rust', 'dart',
    'html', 'css', 'scss', 'bash', 'sh', 'sql',
    'json', 'yaml', 'yml', 'markdown', 'md'
  ];

  // Normalize language aliases and check support
  const languageMap = {
    'js': 'javascript',
    'ts': 'typescript',
    'py': 'python',
    'cs': 'csharp',
    'sh': 'bash',
    'yml': 'yaml',
    'md': 'markdown'
  };

  const normalizedLang = languageMap[lang] || lang;
  const isSupported = supportedLanguages.includes(normalizedLang);
  const displayLang = isSupported ? normalizedLang : 'text';

  return (
    <div className={`code-highlighter ${className}`}>
      <SyntaxHighlighter
        language={displayLang}
        style={darkMode ? xonokai : ghcolors}
        showLineNumbers={showLineNumbers}
        customStyle={{
          fontSize: '0.9rem',
          borderRadius: '4px',
          padding: '1rem',
          margin: '1rem 0',
          overflowX: 'auto',
        }}
        lineNumberStyle={{
          minWidth: '2.5em',
          color: darkMode ? '#6c757d' : '#adb5bd',
          paddingRight: '1em'
        }}
      >
        {code}
      </SyntaxHighlighter>
      
      {!isSupported && lang && (
        <div className="language-warning" style={{
          color: darkMode ? '#ff6b6b' : '#dc3545',
          fontSize: '0.8rem',
          marginTop: '-0.5rem',
          marginBottom: '1rem',
          textAlign: 'right'
        }}>
          Unsupported language: {lang} (showing as plain text)
        </div>
      )}
    </div>
  );
};

export default CodeHighlight;