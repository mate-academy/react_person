import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export default function Person({ age, name, sex, isMarried, partnerName }) {
  return (
    <section className="Person">
      {name
      && (
        <h2 className="Person__name">
          My name is
          {' '}
          {name}
        </h2>
      )}
      {age
      && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}
      {isMarried
      && (
        <p className="Person__partner">
          {' '}
          {isMarried ? (
            `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
          )
            : 'I am not married'}
        </p>
      )}
    </section>
  );
}

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
  sex: PropTypes.oneOf(['f', 'm']).isRequired,
  isMarried: PropTypes.bool.isRequired,
};
