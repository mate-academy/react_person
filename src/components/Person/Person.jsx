// export function Person({ person }) {}
import React from 'react';

export function Person({ name, age, sex, isMarried, partnerName }) {
  const married = `My ${(sex === 'f') ? `husband's` : ` wife's`} name is ${partnerName}`;
  const notmarried = `I am not married`;

  return (
    <section className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>
      <p className="person__age">
        {age && `I am ${age}`}
      </p>
      <p className="person__partner">
        {(isMarried)
          ? married
          : notmarried
       }
      </p>
    </section>
  );
}
