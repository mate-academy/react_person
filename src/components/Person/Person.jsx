import React from 'react';

export const Person = ({ person }) => {
  const partner = (person.sex === 'f' ? 'husband' : 'wife');
  const personInfo = (person.partnerName ? `${person.partnerName} is my ${partner}` : 'I am not married');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      <p className="Person__age">
        {person.age && `I am ${person.age}`}
      </p>

      <p className="Person__partner">
        {personInfo}
      </p>
    </section>
  );
};
