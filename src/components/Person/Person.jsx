import React from 'react';

export function Person({ person }) {
  const {
    isMarried,
    name,
    age,
    partnerName,
  } = person;
  const isMan = person.sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {
      isMarried
        ? (
          <p className="Person__partner">
            {isMan
              ? (`My wife${"'"}s name is ${partnerName}`)
              : (`My husband${"'"}s name is ${partnerName}`)
            }
          </p>
        )
        : (
          <p className="Person__partner">
            I am not married
          </p>
        )
      }
    </section>
  );
}
