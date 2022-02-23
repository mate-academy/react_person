import React from 'react';
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
    {age ? (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
    ) : (
      undefined
    )}

    {isMarried === true ? (
      <p className="Person__partner">
        {sex === 'm'
          ? `My wife's name is ${partnerName}`
          : `My husband's name is ${partnerName}`
      }
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);

Person.defaultProps = {
  partnerName: 'No partner name',
  age: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
