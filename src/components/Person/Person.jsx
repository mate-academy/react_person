import React from 'react';
import { PersonName } from './PersonName';
import { PersonAge } from './PersonAge';
import { PersonSpouse } from './PersonSpouse';

export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  return (
    <section className="Person">
      <PersonName name={name} />
      {person.age && <PersonAge age={age} />}
      <PersonSpouse sex={sex} spouse={partnerName} isMarried={isMarried} />
    </section>
  );
};
