import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({
  data: {
    codeType, tools,
  },
}) => (
  <article className="column">
    {codeType ? (
      <h4 className="sub-header" key={codeType}>{codeType}</h4>
    ) : null}
    
    {tools ? (
      <span className="tools">
      {tools.map((tools) => (
        <span key={tools}>{tools} </span>
      ))}
      </span>
    ) : null}
  </article>
);

Languages.propTypes = {
  data: PropTypes.shape({
    codeType: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Languages;
