import React from 'react';

export const Person = ({ person }) => {
  const getPartner = () => {
    if (person.isMarried) {
      if (person.sex === 'm') {
        return 'wife';
      }

      return 'husband';
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {person.partnerName} is my {getPartner()}
      </p>
    </section>
  );
};
