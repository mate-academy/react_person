import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  if (!name) {
    return (
      <h1>Please insert name</h1>
    );
  }

  return (
    <>
      <div className="App">
        <section className="Person">
          <h2 className="Person__name">
            My name is
            {' '}
            {name}
          </h2>
          {age ? (
            <p className="Person__age">
              I am
              {' '}
              {age}
            </p>
          ) : null}
          {partnerName ? (
            <p className="Person__partner">
              My
              {sex === 'm' ? (
                ` wife's `
              ) : ` husband's `}
              name is
              {' '}
              {partnerName}
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
};

Person.defaultProps = {
  age: 0,
  sex: 'undefined',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
