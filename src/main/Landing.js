import React from 'react';
import Card from '../general/Card';

import Skills from '../components/Skills';
import skills from '../data/skills';

import '../css/main.css';

const sections = {
  Skills: () => <Skills data={skills} />,
};

function Landing() {
  const oldPortfolio = "http://anai-tbgp8ueihwl7eqbikbgy.s3-website-ap-southeast-2.amazonaws.com/index.html";
  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg>

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
        <div className='column'>
          <a className='links' href='/About'>
          More about me 
          <span className='icon-arrow'>{arrow}</span>
          </a>

          <a className='links' href={oldPortfolio} target='_blank'>
          Old version of this website
            <span className='icon-arrow'>{arrow}</span>
          </a>
        </div>

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