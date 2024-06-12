import React from 'react';
import PropTypes from 'prop-types';

import Years from './About/Years';

const Timeline = ({ data }) => (
  <div id="timeline">
    <div className="heading-bar">
      <h5>My Timeline</h5>
    </div>
    {data.map((event) => (
      <Years
        data={event}
        key={`${event.year}`}
      />
    ))}
  </div>
);

Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    year: PropTypes.string,
    events: PropTypes.arrayOf(PropTypes.string),
  })),
};

Timeline.defaultProps = {
  data: [],
};

export default Timeline;
