import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({ name, age, partner, sex, isMarried }) => {
  function getSecondHalf() {
    let secondHalf = "husband's";

    return (sex === 'm')
      ? (secondHalf = "wife's")
      : secondHalf;
  }

  return (
    <div className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="person__age">
          {`I am ${age}`}
        </p>
      )}

      {isMarried && (
        <p className="person__partner">
          {`My ${getSecondHalf()} name is ${partner}`}
        </p>
      )}
    </div>
  );
};

Person.defaultProps = {
  name: '',
  age: '',
  partner: '',
  sex: 'm',
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partner: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};

export default Person;
