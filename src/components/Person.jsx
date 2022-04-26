import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function married(sex, isMarried, partnerName) {
  if (!isMarried) {
    return 'I am not married';
  }

  if (partnerName && sex === 'f') {
    return `My husband's name is ${partnerName}`;
  }

  if (partnerName && sex === 'm') {
    return `My wife's name is ${partnerName}`;
  }

  return 'I am married';
}

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {name ? `My name is ${name}` : 'Unknown person'}
    </h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}
    <p className="Person__partner">{married(sex, isMarried, partnerName)}</p>
  </section>
);

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
  sex: PropTypes.oneOf(['m', 'f']),
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
