import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const isAge = Boolean(age);

  const partnerType = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriageInfo = isMarried
    ? `${partnerName} is my ${partnerType}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {isAge
        ? (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        ) : (
          <p className="Person__age">
            Age not found
          </p>
        )}
      <p className="Person__partner">
        {marriageInfo}
      </p>
    </section>
  );
};
