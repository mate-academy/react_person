import React from 'react';

export const Person = ({ person }) => {
  let partnerInfo;

  if (person.isMarried) {
    partnerInfo =
      person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age >= 0 && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
