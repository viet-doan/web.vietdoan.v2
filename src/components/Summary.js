import React from 'react';
import PropTypes from 'prop-types';

// import Details from './About/Details';

function Summary () {
  const uniURL = 'https://www.unimelb.edu.au/';
  const degreeURL = 'https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-science/';
  const majorURL = 'https://study.unimelb.edu.au/find/courses/major/computing-and-software-systems/';

  return (
    <div id="summary">
      <div className="heading-bar">
        <h5>My Summary</h5>
      </div>

      <table className='tb-summary'>
        <tbody>
          <tr>
            <th>Name</th>
            <td>Viet Doan</td>
          </tr>
          <tr>
            <th>University</th>
            <td><a href={uniURL} target='_blank'>The University of Melbourne</a></td>
          </tr>
          <tr>
            <th>Degree</th>
            <td><a href={degreeURL} target='_blank'>Bachelor of Science</a></td>
          </tr>
          <tr>
            <th>Major</th>
            <td><a href={majorURL} target='_blank'>Computing and Software Systems</a></td>
          </tr>
          <tr>
            <th>Graduation</th>
            <td>December 2025</td>
          </tr>
          <tr>
            <th>Ethnicity</th>
            <td>Vietnamese</td>
          </tr>
          <tr>
            <th>Languages</th>
            <td>Fluent in both English and Vietnamese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
