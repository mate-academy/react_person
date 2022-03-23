import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && (
          `I am ${age}`
        )}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(['m', 'f']),
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  sex: null,
  age: null,
  isMarried: false,
  partnerName: null,
};
