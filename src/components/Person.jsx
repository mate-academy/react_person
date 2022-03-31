import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>

    {age && (
    <p className="Person__age">
      I am
      {' '}
      {age}
    </p>
    )}

    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm'
          ? 'wife\'s'
          : 'husband\'s'}
        name is ${partnerName}`
        : 'I am not married'}
    </p>
  </section>
);

Person.propType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: 'Your name',
  sex: 'Your sex',
  isMarried: false,
};
export { Person };
