import React from 'react';

export function Person({ person }) {
  return (
    <section className="Person">
      <h1 className="Person__name">
        {`My name is ${person.name}`}
      </h1>
      {person.age && (<p className="Person__age">{`I am ${person.age}`}</p>)}
      <p className="Person__partner">
        {person.isMarried
          ? `My ${person.sex === 'm' ? 'wife' : 'husband'} ${person.partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}
