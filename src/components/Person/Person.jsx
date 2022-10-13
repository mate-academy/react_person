import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerRole = '';

  if (isMarried) {
    partnerRole = (sex === 'm') ? 'wife' : 'husband';
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}
        {isMarried ? (
          <p className="Person__partner">{`${partnerName} is my ${partnerRole}`}</p>
        ) : (
          <p className="Person__partner">{' am not married'}</p>
        )}
      </section>
    </>
  );
};
