import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, partnerName, isMarried, sex }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    {isMarried && (
      <p className="Person__partner">
        {`My partner is ${partnerName}`}
      </p>
    )}

    {!isMarried && (
      <p className="Person__partner">
        I am not married
      </p>
    )}
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
  sex: PropTypes.string.isRequired,
};
