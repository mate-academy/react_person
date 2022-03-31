import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age = 0,
  sex,
  isMarried,
  partnerName = '',
}) => (
  <div className="Person">
    <h2 className="Person__name">
      My name is
      {name}
    </h2>
    {age === 0 ? (
      null
    ) : (
      <p className="Person__age">
        I am
        {age}
      </p>
    )}
    {isMarried === true ? (
      <p className="Person__partner">
        {sex === 'm' ? (
          `My wife's name is ${partnerName}`
        ) : (
          `My husband's name is ${partnerName}`
        )}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </div>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
};

export default Person;
