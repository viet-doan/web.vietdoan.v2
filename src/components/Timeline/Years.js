import React from 'react';
import PropTypes from 'prop-types';

const Years = ({
  data: {
    year, events,
  },
}) => (
  <article className="column">
    {year ? (
      <h4 className="sub-header" key={year}>{year}</h4>
    ) : null}
    
    {events ? (
      <ul className="events">
      {events.map((events) => (
        <li key={events}>{events}</li>
      ))}
      </ul>
    ) : null}
  </article>
);

Years.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Years;
