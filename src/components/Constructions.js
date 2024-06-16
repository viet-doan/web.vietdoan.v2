import React from 'react';
import { Link } from 'react-router-dom';

const Constructions = () => (
  <div className="not-found">
    <div className='not-found'>
      <h3>This page is currently under constructions👷🏗️</h3>
      <p>Please come back later</p>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </div>
);

export default Constructions;
