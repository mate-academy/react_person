import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, ifMarrid = false, partnerName } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husbend';

  const personMarrid = ifMarrid
    ? `${partnerName} is my ${partnerSex}`
    : 'I am not married';

  const personAge = age
    ? (
      <p classNmae="Person__age">
        {`I am ${age}`}
      </p>
    )
    : null;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {personAge}

      <p className="Person__partner">
        {personMarrid}
      </p>
    </section>
  );
};
