import React from 'react';

export const Person = ({ person }) => {
  const { age,
    name,
    sex,
    isMarried,
    partnerName } = person;

  const maritalStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {person.age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      {isMarried ? (
        <p>
          {`${partnerName} is my ${maritalStatus}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
};
