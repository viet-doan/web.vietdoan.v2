import React from 'react';
import PropTypes from 'prop-types';

import Programme from './Programme/Programme';

const Tasks = ({ data }) => (
  <div id="projects" className="column">
    <h2>My Projects</h2>
    {data.map((task) => (
      <Programme
        data={task}
        key={`${task.name}`}
      />
    ))}
  </div>
);

Tasks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    descriptions: PropTypes.string,
    website: PropTypes.string,
    languagesAndTools: PropTypes.string,
    image: PropTypes.string,
  })),
};

Tasks.defaultProps = {
  data: [],
};

export default Tasks;
