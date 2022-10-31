import React from 'react';

export const Person = ({ person }) => {
  const husbandOrWife = (person.sex === 'f')
    ? (`husband`)
    : (`wife`);

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {person.isMarried || `I am not married`}
        {person.isMarried && `${person.partnerName} is my `}
        {person.isMarried && `${husbandOrWife}`}
      </p>
    </section>
  );
};
