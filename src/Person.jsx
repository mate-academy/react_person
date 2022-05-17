import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, sex, age, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is&nbsp;
      {name}
    </h2>
    { age && (
      <p className="Person__age">
        I am&nbsp;
        {age}
      </p>
    )}
    <p className="Person__partner">
      { isMarried
        ? `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  age: PropTypes.number,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: '',
  sex: '',
  isMarried: '',
  age: '',
  partnerName: '',
};
