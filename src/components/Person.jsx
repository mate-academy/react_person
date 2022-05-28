import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ people }) => {
  return people.map(person => (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age ? <p className="Person__age">{`I am ${person.age}`}</p> : undefined}
        {person.isMarried && (person.sex === 'm' ? <p className="Person__partner">{ `My wife's name is ${person.partnerName}`}</p>
          : <p className="Person__partner">{ `My husband's name is ${person.partnerName}`}</p>)}
      </section>
    </>
  ));
};

Person.PropTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.boolean,
    partnerName: PropTypes.string,
  }),
};
