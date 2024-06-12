import React from 'react';
// import PropTypes from 'prop-types';

import Programming from './Skills/Programming';

function Skills () {

  return (
    <div id="skills">
      <div className="heading-bar">
        <h5>My Knowledge & Skills</h5>
      </div>

      
      <table className='tb-summary'>
        <tbody>
          <tr>
            <th>Backend</th>
            <td>Python, C, Java</td>
          </tr>
          <tr>
            <th>Frontend</th>
            <td>HTML5, CSS3, JavaScript, React</td>
          </tr>
          <tr>
            <th>Database</th>
            <td>MySQL</td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>IntelliJ IDEA, VSCode, Git, Github, Matlab, Figma, Adobe Illustrator</td>
          </tr>
        </tbody>
      </table>
      <Programming />
    </div>
  );
}

export default Skills;
