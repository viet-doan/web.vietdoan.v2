import React from 'react';
// import PropTypes from 'prop-types';

import Programming from './Skills/Programming';

function Skills () {

  return (
    <div id="skills">
      <div className="heading-bar">
        <h5>Knowledge & Skills</h5>
      </div>

      
      <table className='tb-summary'>
        <tbody>
          <tr>
            <th>Coding Languages</th>
            <td>Python, C, Java, JavaScript, TypeScript</td>
          </tr>
          <tr>
            <th>Frontend Development</th>
            <td>HTML, CSS, React JS, TailwindCSS, Material UI (MUI)</td>
          </tr>
          <tr>
            <th>Backend Development</th>
            <td>Node.js, Express.js</td>
          </tr>
          <tr>
            <th>Database</th>
            <td>MongoDB, MySQL, Firestore</td>
          </tr>
          <tr>
            <th>Cloud Services</th>
            <td>Firebase, Heroku</td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>Jira, Confluence, Git, Github, Matlab, Figma, Adobe Illustrator</td>
          </tr>
        </tbody>
      </table>
      <Programming />
    </div>
  );
}

export default Skills;
