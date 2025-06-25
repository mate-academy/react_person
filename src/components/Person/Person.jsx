import React from 'react';

const marriedMale = 'wife';
const marriedFemale = 'husband';

export const Person = ({
  person: { name, age, isMarried, sex, partnerName },
}) => {
  const marriageStatusName = sex === 'm' ? marriedMale : marriedFemale;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${marriageStatusName}`
          : `I am not married`}
      </p>
    </section>
  );
};
