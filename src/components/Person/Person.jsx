import React from 'react';

export const Person = ({ person }) => {
  const status = person.sex === 'm'
    ? 'is my wife'
    : 'is my husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {
      person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )
      }
      <p className="Person__partner">
        { !person.partnerName
          || person.partnerName === 'Some Partner'
          ? 'I am not married'
          : `${person.partnerName} ${status}`
        }
      </p>
    </section>
  );
};
