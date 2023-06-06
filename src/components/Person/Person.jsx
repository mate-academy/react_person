import React from 'react';
import './Person.css';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let partnerRole = 'wife';

  if (sex === 'f') {
    partnerRole = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age
        && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerRole}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
