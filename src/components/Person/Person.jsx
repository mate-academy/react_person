import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  let partner = 'husband';

  if (person.sex === 'm') {
    partner = 'wife';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age ? `I am ${person.age}` : null}</p>
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partner}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};
