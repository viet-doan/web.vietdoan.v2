// export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.css'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experiences = lazy(() => import('./pages/Experiences'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    {/* <Suspense fallback={<Main />}> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Experiences" element={<Experiences />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/stats" element={<Stats />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
