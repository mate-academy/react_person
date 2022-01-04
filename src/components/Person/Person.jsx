import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function partner(sex, partnerName) {
  if (!partnerName) {
    return 'I am not married';
  }

  if (sex === 'f') {
    return `My husband's name is ${partnerName}`;
  }

  return `My wife's name is ${partnerName}`;
}

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    <p className="Person__age">
      {age ? (
        `I am ${age}`
      ) : (
        ''
      )}
    </p>

    <p className="Person__partner">
      {partner(sex, partnerName)}
    </p>
  </section>
);

Person.defaultProps = {
  name: undefined,
  age: undefined,
  sex: undefined,
  isMarried: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
