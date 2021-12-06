import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <div className="Person__content">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age ? (
          `I am ${age}`
        ) : null
        }
      </p>

      {isMarried ? (
        <p className="Person__partner">
          {
            sex === 'm'
              ? 'My wife'
              : 'My husband'
          }
          {'\'s name is '}
          {partnerName}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </div>
  </section>
);

Person.defaultProps = {
  isMarried: false,
  age: null,
  sex: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  sex: PropTypes.string,
};
