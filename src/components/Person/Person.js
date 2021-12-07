import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}
    <p className="Person__partner">
      {person.isMarried
        ? (`My ${person.sex === 'm' ? `wife's` : `husband's`}
        name is ${person.partnerName}`)
        : ('I am not married')}
    </p>
  </section>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.PropTypes.oneOf(['m', 'f']),
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
