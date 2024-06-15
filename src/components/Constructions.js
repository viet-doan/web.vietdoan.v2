import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Constructions = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="...">
        <meta name="description" content="The page is under constructions." />
      </Helmet>
      <div className='not-found'>
        <h3>This page is currently under constructions👷🏗️</h3>
        <p>Please come back later</p>
        <p>Return <Link to="/">home</Link>.</p>
      </div>
    </div>
  </HelmetProvider>
);

export default Constructions;
