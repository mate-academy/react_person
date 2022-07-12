import React from 'react';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age
        ? (<p className="Person__age">{`I am ${person.age}`}</p>)
        : ('')}

      <p className="Person__partner">
        {
          (person.isMarried) // eslint-disable-line
            ? ((person.sex === 'm')
              ? `My wife's name is ${person.partnerName}`
              : `My husband's name is ${person.partnerName}`)
            : `I am not married`
        }
      </p>

    </section>
  );
}
