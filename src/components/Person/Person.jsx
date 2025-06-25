import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    isMarried,
    age,
    partnerName,
  } = person;

  const PartnerRole = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )
      }

      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${PartnerRole}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
