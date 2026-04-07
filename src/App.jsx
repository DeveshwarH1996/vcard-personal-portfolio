import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Publications from './pages/Publications';

function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
