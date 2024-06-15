import React from 'react';
import PropTypes from 'prop-types';

const Programme = ({
  data: {
    name,descriptions,website,languagesAndTools,image,date
  },
}) => (
  <div className="row">
    <div className="column snippets">
      <img className="snippet" src={image} alt="Project"></img>
    </div>
    <article className="descriptions">
      {name ? (
        <div className="heading-bar">
          <h5 key={name}>{name}</h5>
        </div>
      ) : null}
      
      {descriptions ? (
        <p key={descriptions}>{descriptions}</p>
      ) : null}

      {website ? (
        <p key={website}><strong>Website: </strong><a href={website} rel="noreferrer" target='_blank'>{website}</a></p>
      ) : null}

      {languagesAndTools ? (
        <p key={languagesAndTools}><strong>Languages & Tools: </strong>{languagesAndTools}</p>
      ) : null}

      {date ? (
        <p key={date}><strong>Dates: </strong>{date}</p>
      ) : null}
    </article>
  </div>
);

Programme.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
    website: PropTypes.string,
    languagesAndTools: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Programme;
