import CodeHighlight from "../CodeHighlight";
import SlidingPanel from './SlidingPanel';
import './SlidingPanel.css';

function Page_001() {
  return (
    <div className="container">
    <p className="summary">
    This page will guide you through the basic setup of a React project with React Router.
    <br />
    <pre>{`
    $ node -v
    v24.1.0
    $ npm --version
    11.3.0
    `}</pre>

    </p>
      <h2 style={{'textAlign':'center'}}> Basic Setup</h2>
      <>
        <h4>Step 1: React Installation</h4>
        // Installing React
        <CodeHighlight lang="bash" darkMode>
          {`
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
`}
        </CodeHighlight>
      </>

      <>
        <h4>Step 2: Install React Router</h4>
        Install the latest version of React Router:
        <CodeHighlight lang="bash" darkMode>
          npm install react-router-dom
        </CodeHighlight>
      </>

      <>
        <h4>Step 3: Changing main.jsx</h4>
        Install the latest version of React Icons:
        <CodeHighlight lang="js" darkMode>
          {`
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)      
          `}
        </CodeHighlight>
      </>

      <>
        <h4>Step 4: Basic routing</h4>
        <CodeHighlight lang="js" darkMode>
          {`
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </div>
  )
}

export default App
`}
        </CodeHighlight>
      </>

      <>
        <SlidingPanel>
            <h2>Sliding Panel Content</h2>
            <p>This is the content of the sliding panel. It can be any React components.</p>
        </SlidingPanel>
      </>
    </div>
  );
}

export default Page_001;
