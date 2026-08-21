import React from 'react';

export function Person({ person }) {
  const { name, age, isMarried, sex, partnerName } = person;

  const partnerLabel = sex === 'm'
    ? 'wife'
    : 'husband';

  const partnerMessage = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>

      {age !== undefined && (
        <p className="Person__age">
          I am {age}
        </p>
      )}

      <p className="Person__partner">
        {partnerMessage}
      </p>
    </div>
  );
}

export default Person;