import React from 'react';

export const Person = (props) => {
  const personName = `My name is ${props.person.name}`;
  const personAge = `I am ${props.person.age}`;
  let personPartners = `My ${props.person.sex === 'f' ? 'husband' : 'wife'}'s name is
    ${props.person.partnerName}`;

  if (!props.person.isMarried) {
    personPartners = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {personName}
      </h2>
      {props.person.age && (
        <p className="Person__age">
          {personAge}
        </p>
      )}
      <p className="Person__partner">
        {personPartners}
      </p>
    </section>
  );
};
