import React from 'react';

export function Person({ person }) {
  const { sex, name, age, isMarried, partnerName } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
      && (<p className="Person__age">{`I am ${age}`}</p>)
      }

      <p className="Person__partner">
        {
        isMarried
          ? `My ${partnerSex}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
}
