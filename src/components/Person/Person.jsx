// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';
  const marriedStatus = person.isMarried
    ? `${person.partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
        <p className="Person__partner">{marriedStatus}</p>
      </section>
    </>
  );
};
