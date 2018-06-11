import React from 'react';

const Headline = props => (
  <div>
    <h3> {props.title}</h3>
    {props.subtitle && <h4>{props.subtitle}</h4>}
  </div>
);

Headline.defaultProps = {
  title: 'Title',
};

export default Headline;

