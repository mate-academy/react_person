import React from 'react';
import PropTypes, { bool, string, number } from 'prop-types';
import MarriedStatus from './MarriedStatus';

const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {person.name}
    </h2>
    {person.age && (
    <p className="Person__age">
      I am
      {' '}
      {person.age}
    </p>
    )}
    <MarriedStatus
      isMarried={person.isMarried}
      sex={person.sex}
      partnerName={person.partnerName}
    />
  </section>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: string.isRequired,
    age: number,
    isMarried: bool.isRequired,
    sex: string.isRequired,
    partnerName: string,
  }).isRequired,
};

export default Person;
