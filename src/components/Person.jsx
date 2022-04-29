import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export function Person({ person }) {
  const partnerType = person.sex === 'm' ? 'wife\'s' : 'husband\'s';
  const partner = person.isMarried === true ? `My ${partnerType} name is ${person.partnerName}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']),
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
