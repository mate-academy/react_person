import React from 'react';

export function Person({
  person: { name, age, sex, isMarried, partnerName },
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried ? `My ${sex === 'm' ? 'wife' : 'husband'}&apos;s name is ${partnerName}` : 'I am not married'}
      </p>
    </section>
  );
}
