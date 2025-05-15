import React from 'react';
import { Age } from '../Age/Age';
import { Partner } from '../Partner/Partner';

export const Person = ({ person }) => {
  const { age, sex, partnerName, isMarried, name } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <Age age={age} />

      <Partner
        isMarried={isMarried}
        sex={sex}
        partnerName={partnerName}
      />
    </section>
  );
};
