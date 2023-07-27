import React from 'react';

export const Person = ({ person }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {person.name}
      </h2>
      {person.age && (
        <p className="Person__age">
            {person.age}
        </p>
      )}
      <p className="Person__partner">
        {person.isMarried === true ? `${person.partnerName} is my  ${person.sex === 'f' ? 'wife' : 'husband'}` : 'I am not married'}
      </p>
    </section>
  </>
);
