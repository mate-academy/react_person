import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  let relationshipStatus;

  if (isMarried) {
    relationshipStatus = sex === 'm' ? 'wife' : 'husband';
  } else {
    relationshipStatus = 'not married';
  }

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
        {isMarried ? (
          `${partnerName} is my ${relationshipStatus}`
        ) : (
          `I am ${relationshipStatus}`
        )}
      </p>
    </section>
  );
};
