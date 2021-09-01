import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export default function Person(props) {
  const { age, name, sex, isMarried, partnerName } = props;

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
      {
        <p className="Person_ _partner">
          {' '}
          {isMarried ? (
            `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
          ) : 'I am not married'}
        </p>
       }
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
