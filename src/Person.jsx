import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  partner,
}) => (
  <>
    <h2>{`${name}`}</h2>
    <p>{`${age}`}</p>
    <p>{`${partner}`}</p>
  </>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Person;
