import React from 'react';
import PropTypes from 'prop-types';

export function Person({ name, sex, age, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`my name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{age}</p>)}
        <p className="Person__partner">{
          isMarried && sex === 'm' ?
          `My wife's name is ${partnerName}`:
          `My husband's name is ${partnerName}`
          !isMarried &&
        }</p>
    </section>
  );
}

Person.defaultProps = {
  name: 'unknown',
  sex: 'unknown',
  age: null,
  isMarried: false,
  partnerName: 'unknown',
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.oneOf(['f', 'm']),
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
