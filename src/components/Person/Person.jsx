import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText = '';

  if (isMarried) {
    let partnerRole = '';

    if (sex === 'm') {
      partnerRole = 'wife';
    } else {
      partnerRole = 'husband';
    }

    partnerText = `${partnerName} is my ${partnerRole}`;
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
