import React from 'react';

function getPartnerSex(sex) {
  return sex === 'm' ? 'wife' : 'husband';
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">{person.age && `I am ${person.age}`}</p>
    <p className="Person__partner">
      {
        person.isMarried
          ? `${person.partnerName} is my ${getPartnerSex(person.sex)}`
          : 'I am not married'
      }
    </p>
  </section>
);
