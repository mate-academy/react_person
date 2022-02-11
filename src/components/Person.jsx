import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    {name && (
      <h2 className="Person__name">{`My name is ${name}`}</h2>
    )}

    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}

    <p className="Person__partner">
      {isMarried
        ? (
          `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
        )
        : 'I am not married'}
    </p>
  </section>
);

Person.defaultProps = {
  name: undefined,
  age: undefined,
  sex: undefined,
  isMarried: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
