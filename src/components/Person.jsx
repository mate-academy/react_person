import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">{sex === 'f' || `I am ${age}`}</p>
    { !isMarried
      ? <p className="Person__partner">I am not married</p>
      : (
        <p className="Person__partner">
          {
          sex === 'f'
            ? `My husband's name is ${partnerName}`
            : `My wife's name is ${partnerName}`
          }
        </p>
      )}
  </>
);

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
