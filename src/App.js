// export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/main.css'; // All of our styles
// const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  // <BrowserRouter basename={PUBLIC_URL}>
    <BrowserRouter>
    {/* Loading when re-rendering */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route index element={<Index />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
