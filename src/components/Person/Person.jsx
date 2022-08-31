import React from 'react';

export const Person = ({ person }) => {
  const isMarriedMan = person.sex === 'm' && person.isMarried;
  const isMarriedWoman = person.sex === 'f' && person.isMarried;

  let text = '';

  if (isMarriedMan) {
    text = `${person.partnerName} is my wife`;
  }

  if (isMarriedWoman) {
    text = `${person.partnerName} is my husband`;
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
        <p className="Person__partner">{text || 'I am not married'}</p>
      </section>
    </>
  );
};
