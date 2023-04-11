import React from 'react';

export const Person = ({ person: { name, sex, age, partnerName } }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {partnerName ? (
          `${partnerName} is my ${partner}`
        ) : (
          `I am not married`
        )}
      </p>
    </section>
  );
};
