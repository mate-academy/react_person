import React from 'react';

export const Person = ({ person }) => {
  const personAge = (
    <p className="Person__age">
      {`I am ${person.age}`}
    </p>
  );
  const notMarried = <p className="Person__partner">I am not married</p>;
  const myWife = (
    <p className="Person__partner">
      {person.partnerName}
      {' '}
      is my wife
    </p>
  );
  const myHusband = (
    <p className="Person__partner">
      {person.partnerName}
      {' '}
      is my husband
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && personAge}

      {!person.isMarried && notMarried}

      {person.isMarried && (person.sex === 'm' ? myWife : myHusband)}

    </section>
  );
};
