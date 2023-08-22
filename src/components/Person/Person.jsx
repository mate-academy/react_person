import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let married = <p className="Person__partner">I am not married</p>;

  if (sex === 'f' && isMarried) {
    married = <p className="Person__partner">{`${partnerName} is my husband`}</p>;
  }

  if (sex === 'm' && isMarried) {
    married = <p className="Person__partner">{`${partnerName} is my wife`}</p>;
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{ `My name is ${name}` }</h2>
        { age && <p className="Person__age">{`I am ${age}`}</p>}
        { married }
      </section>
    </>
  );
};
