import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age > 0
      && <p className="Person__age">{`I am ${person.age}`}</p>
    }

    {person.isMarried === true
      ? <p className="Person__partner">{`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}</p>
      : <p className="Person__partner">I am not married</p>
    }
  </section>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
