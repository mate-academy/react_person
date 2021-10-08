import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    <p className="Person__age">
      {age !== null && `I am ${age}`}
    </p>

    <p className="Person__partner">
      {partnerName === null
        ? `I am not married`
        : `My ${sex === 'f' ? "husband's" : "wife's"} name is ${partnerName}`}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};
