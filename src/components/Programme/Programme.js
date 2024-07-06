import React from 'react';
import PropTypes from 'prop-types';

const Programme = ({
  data: {
    name, descriptions, website, github, links, languagesAndTools, image, date
  },
}) => (
  <div className="row">
    <div className="column snippets">
      {image && <img className="snippet" src={image} alt="Project" />}
    </div>
    <article className="descriptions">
      {name && (
        <div className="heading-bar">
          <h5>{name}</h5>
        </div>
      )}

      {descriptions && (
        <p>{descriptions}</p>
      )}

      {website && (
        <p><strong>Website: </strong><a href={website} rel="noreferrer" target='_blank'>{website}</a></p>
      )}

      {github && (
        <p><strong>GitHub: </strong><a href={github} rel="noreferrer" target='_blank'>{github}</a></p>
      )}

      {links && Object.keys(links).length > 0 && (
        <div className='otherLinks'>
          <p><strong>Other Relevant Links: </strong></p>
          {Object.entries(links).map(([key, value]) => (
            <a key={key} href={value} target="_blank" rel="noreferrer">{key}</a>
          ))}
        </div>
      )}

      {languagesAndTools && (
        <p><strong>Languages & Tools: </strong>{languagesAndTools}</p>
      )}

      {date && (
        <p><strong>Dates: </strong>{date}</p>
      )}
    </article>
  </div>
);

Programme.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
    website: PropTypes.string,
    github: PropTypes.string,
    links: PropTypes.objectOf(PropTypes.string),
    languagesAndTools: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Programme;
