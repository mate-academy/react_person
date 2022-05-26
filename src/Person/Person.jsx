/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({ person }) {
  const personPartner = person.sex === 'f'
    ? 'husband' : 'wife';

  return (
    <section className="Person">
      <>
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        <p className="Person__age">
          { person.age && `I am ${person.age}` }
        </p>
        <p className="Person__partner">
          {person.isMarried ? `My ${personPartner}'s name is ${person.partnerName}`
            : 'I am not married'}
        </p>
      </>
    </section>
  );
}

Person.prototypes = {
  personInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
