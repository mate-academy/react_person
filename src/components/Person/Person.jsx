import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let relationshipStatus = '';

  if (!isMarried) {
    relationshipStatus = 'I am not married';
  } else {
    const partnerRole = sex === 'f' ? 'husband' : 'wife';

    relationshipStatus = `${partnerName} is my ${partnerRole}`;
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

      <p className="Person__partner">{relationshipStatus}</p>
    </section>
  );
};
