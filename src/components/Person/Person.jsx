// export function Person({ person }) {}
import React from 'react';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="person">
    <h2 className="person__name">
      {`My name is ${name}`}
    </h2>
    <p className="person__age">
      {age && `I am ${age}`}
    </p>
    <p className="person__partner">
      {(isMarried)
        ? `My ${(sex === 'f') ? `husband's` : ` wife's`} name is ${partnerName}`
        : `I am not married`
      }
    </p>
  </section>
);
