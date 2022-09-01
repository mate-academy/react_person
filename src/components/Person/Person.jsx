import React from 'react';

export function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const genderMarried = sex === 'm'
    ? 'wife'
    : 'husband';
  const marriedText = isMarried
    ? `My ${genderMarried}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        { name }
      </h2>
      { age && (
        <p className="Person__age">
          I am&nbsp;
          { age }
        </p>
      )}
      <p className="Person__partner">{ marriedText }</p>
    </section>
  );
}
