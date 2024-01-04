import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.sex !== 'f' && (
      <p className="Person__age">I am 37</p>
    )}

    {person.isMarried ? (
      <p className="Person__partner">
        {`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
