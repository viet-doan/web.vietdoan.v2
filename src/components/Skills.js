import React from 'react';
// import PropTypes from 'prop-types';

import Programming from './Skills/Programming';

// import Languages from './Skills/Languages';

// const Skills = ({ data }) => (
//   <div className ="section">
//     <div className="heading-bar">
//       <h5>My Skills</h5>
//     </div>
//     {data.map((languages) => (
//       <Languages
//         data={languages}
//         key={`${languages.codeType}`}
//       />
//     ))}
//   </div>
// );

// Skills.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.exact({
//     codeType: PropTypes.string,
//     tools: PropTypes.arrayOf(PropTypes.string),
//   })),
// };

// Skills.defaultProps = {
//   data: [],
// };

function Skills () {

  return (
    <div id="skills">
      <div className="heading-bar">
        <h5>My Knowledge & Skills</h5>
      </div>
      <Programming />
    </div>
  );
}

export default Skills;
