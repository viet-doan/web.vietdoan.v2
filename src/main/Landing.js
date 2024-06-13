import React from 'react';
import Card from '../general/Card';
import Form from '../components/Form';

import Skills from '../components/Skills';
import skills from '../data/skills';

import '../css/main.css';

const sections = {
  Skills: () => <Skills data={skills} />,
};

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
        <p>I am currently a Computer Science student at the University of Melbourne.
          <br></br>And this website is my first React Project.</p>
        <a className='btn-general' href='/About'>More about me..</a>

        {/* Skills */}
        <div className="column">
          {Object.entries(sections).map(([name, Section]) => (
            <Section key={name} />
          ))}
        </div>

        {/* <Form /> */}
      </div>
    </main>
  );
}

export default Landing;