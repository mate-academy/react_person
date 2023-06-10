import React from 'react';

function getPurtnerSex(personSex) {
  return personSex === 'f' ? 'husband' : 'wife';
}

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner = `${partnerName} is my ${getPurtnerSex(sex)}`;

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
        {isMarried
          ? (partner)
          : ('I am not married')
        }
      </p>
    </section>
  );
};
