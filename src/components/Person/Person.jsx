import React from 'react';
// import PropTypes from 'prop-types';
import { IsNotMarried } from '../Married/Married';
import { PartnerName } from '../Married/PartnerName';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    {(!person.isMarried)
      ? <IsNotMarried />
      : <PartnerName sex={person.sex} name={person.partnerName} />
    }
  </section>
);
