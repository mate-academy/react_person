import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const sexPartner = (person.sex === 'm') ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${sexPartner}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
