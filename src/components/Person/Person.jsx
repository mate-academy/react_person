import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person person__container">
      <section className="Person Person__section">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        <p className="Person__age">
          {age
            ? (
              `I am ${age}`)
            : (
              null
            )}
        </p>
        <p className="Person__partner">
          {isMarried
            ? (
              `My ${partner} is ${partnerName}`)
            : (
              'not married')}
        </p>
      </section>
    </div>
  );
};

Person.defaultProps = {
  sex: null,
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};
