import React from 'react';

export function Person({ person }) {
  const myPartner = person.sex === 'm' ? `wife's` : `husband's`;
  const partner = person.partnerName
    ? `My ${myPartner} name is ${person.partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{ `My name is ${person.name}` }</h2>
      {person.age && (<p className="Person__age">{`I am ${person.age}`}</p>)}
      <p className="Person__partner">{ partner }</p>
    </section>
  );
}
