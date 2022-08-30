import React from 'react';

export function Person({ person }) {
  const genderMarried = person.sex === 'm' ? 'wife' : 'husband';
  const marriedText = person.isMarried
    ? `My ${genderMarried}'s name is ${person.partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        { person.name }
      </h2>
      { person.age
        && (
        <p className="Person__age">
          I am&nbsp;
          { person.age }
        </p>
        )
      }
      <p className="Person__partner">{ marriedText }</p>
    </section>
  );
}
