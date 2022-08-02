import React from 'react';

export function Person({
  human: { name, age, sex, isMarried, partnerName },
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`My age is ${age}`}</p> : ''}
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}
