import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner = '';

  if (isMarried === true && sex === 'm') {
    partner = `${partnerName} is my wife`;
  }

  if (isMarried === true && sex === 'f') {
    
    partner = `${partnerName} is my husband`;
  } else if (isMarried === false) {
    partner = 'I am not married';
  }

  return (
    <>
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
          {partner}
        </p>
      </section>
    </>
  );
};
