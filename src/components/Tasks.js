import React from 'react';
import PropTypes from 'prop-types';

import Programme from './Programme/Programme';

const Tasks = ({ data }) => (
  <div className="column">
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
    github: PropTypes.string.isRequired,
    links: PropTypes.objectOf(PropTypes.string).isRequired,
    languagesAndTools: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
  })),
};

Tasks.defaultProps = {
  data: [],
};

export default Tasks;
