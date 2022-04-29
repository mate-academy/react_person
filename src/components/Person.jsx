import React from 'react';
import './Person.scss';

export function Person({ person }) {
  const partnerType = person.sex === 'f' ? 'wife\'s' : 'husband\'s';
  const partner = person.isMarried === true ? `My ${partnerType} name is ${person.partnerName}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{`I am ${person.age}`}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
}
