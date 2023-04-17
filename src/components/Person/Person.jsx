import React from 'react';

export const Person = ({ person }) => {
  const husbandOrWife = person.isMarried
    ? `${person.partnerName} is my ${person.sex === 'm'
      ? 'wife' : 'husband'}` : 'I am not married';
  const ageContant = person.age
    ? <p className="Person__age">{`I am ${person.age}`}</p> : '';

  return (
    <section className="Person">
      <>
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {ageContant}
        <p className="Person__partner">{husbandOrWife}</p>
      </>
    </section>
  );
};
