import React from 'react';

export const Person = ({ person }) => {
  let msg = `I am not married`;

  if (person.isMarried) {
    const partner = person.sex === 'm' ? 'wife' : 'husband';

    msg = `${person.partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>
      {person.age && (
        <p className="Person__age">I am 37</p>
      )}
      <p className="Person__partner">{msg}</p>
    </section>
  );
};
