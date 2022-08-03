import React from 'react';

export const Person = ({ person: {
  name,
  sex,
  age,
  isMarried,
  partnerName,
} }) => {
  const ageOfPerson = age;
  const partnerOfPerson = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {ageOfPerson ? (
        <p className="Person__age">{`I am ${age}!`}</p>
      ) : null}

      <p className="Person__partner">
        {isMarried
          ? `My ${partnerOfPerson}'s name is ${partnerName}`
          : 'I am not married'
            }
      </p>

    </section>
  );
};
