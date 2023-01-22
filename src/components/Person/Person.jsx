import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && <p className="Person__age">{`I am ${age}`}</p>}

        {isMarried === false
          ? 'I am not married'
          : `${partnerName} is my ${partner}`
        }

      </section>
    </div>
  );
};
