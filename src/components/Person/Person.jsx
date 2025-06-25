import React from 'react';
import './Person.scss';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const maritalStatus = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`my name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${maritalStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};
