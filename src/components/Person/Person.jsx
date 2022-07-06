import React from 'react';
import './Person.scss';

export const Person = ({
  name, age, sex, partnerName,
}) => {
  const partner = (sex === 'f')
    ? "husband's"
    : "wife's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {partnerName
          ? `My ${partner} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};
