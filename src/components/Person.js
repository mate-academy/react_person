import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const wifeOrHusband = (sex === 'm') ? ('wife\'s') : ('husband\'s');

  return (
    <>
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

        {isMarried ? (
          <p className="Person__partner">
            My
            {' '}
            {wifeOrHusband}
            {' '}
            name is
            {' '}
            {partnerName}
          </p>
        ) : (
          <p className="Person__partner">I am not married</p>
        )}
      </section>
    </>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: 'please enter partner name',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
