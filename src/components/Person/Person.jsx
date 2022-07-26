import React from 'react';

export function Person({ person }) {
  const partnerSex = person.sex === 'm' ? `wife's` : `husband's`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (<p className="Person__age">{`I am ${person.age}`}</p>)}
      <p className="Person__partner">
        {person.isMarried
          ? `My ${partnerSex} name is ${person.partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}
