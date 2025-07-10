import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Page_001 from './pages/001';

import NotFound from './pages/NotFound'
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/001" element={<Page_001 />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </div>
  )
}

export default App