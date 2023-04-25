import React from 'react';

export const Person = ({
  person,
}) => {
  const { sex, partnerName, isMarried, name, age } = person;
  const husbandOrWife = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const partner = isMarried
    ? husbandOrWife
    : 'I am not married';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">{partner}</p>
      </section>
    </>
  );
};
