import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  if (isMarried === true) {
    return (
      <section className="Person">
        <h2 className="Person__name">
          My name is
          {' '}
          {name}
        </h2>
        {age > 0 && (
          <p className="Person__age">
            I am
            {' '}
            {age}
          </p>
        )}
        <p className="Person__partner">
          {sex === 'm'
            ? `My wife's name is ${partnerName}`
            : `My husband's name is ${partnerName}`}
        </p>
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age > 0 && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}
      <p className="Person__partner">I am not married</p>
    </section>
  );
};

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
