import React from 'react';
import Card from '../general/Card';
import Form from '../components/Form';

// import { useHref } from 'react';
import '../css/main.css';

function Landing() {  
  return (
    <main className="main row">
      <Card />
      {/* Welcome Section */}
      <div className="column landing">
        <div className="heading-bar">
          <h5>Welcome to my Portfolio</h5>
        </div>
        <h1>Hi! 😊<br />I'm Viet Doan</h1>
        <p>I am currently a Computer Science student at the University of Melbourne</p>
        <a className='btn-general' href='/About'>More about me..</a>
        <Form />
      </div>
    </main>
  );
}

export default Landing;