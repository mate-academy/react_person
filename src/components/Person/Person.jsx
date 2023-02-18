import React from 'react';

export function Person({ person }) {
  const partnerGender = person.sex === 'm' ? 'wife' : 'husband';
  const isAgeProp = person.age;
  const isMarried = person.isMarried
    ? `${person.partnerName} is my ${partnerGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {isAgeProp && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{isMarried}</p>
    </section>
  );
}
