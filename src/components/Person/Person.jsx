import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerType = sex === `m` ? `wife's` : `husband's`;
  const partner = isMarried
    ? `My ${partnerType} name is ${partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
}

Person.defaultProps = {
  age: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf('m' || 'f').isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
