import React from 'react';

export const Person = ({ person }) => {
  const partnerRole = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (<p className="Person__age">{`My age is ${person.age}`}</p>)}
      {person.isMarried
        ? (<p className="Person__partner">{`My ${partnerRole}'s name is ${person.partnerName}`}</p>)
        : <p className="Person__partner">not married</p>}
    </section>
  );
};
