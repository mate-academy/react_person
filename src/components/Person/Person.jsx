import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const selectedMarried = `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">{selectedMarried}</p>
      ) : (
        <p className="Person__partner">is not married</p>
      )}
    </section>
  );
};
