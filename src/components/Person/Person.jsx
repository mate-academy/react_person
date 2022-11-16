import React from 'react';

export function Person({ person }) {
  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = person;

  const partner = (sex === 'm')
    ? 'wife'
    : 'husband';

  const marriedStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {marriedStatus}
      </p>
    </section>
  );
}
