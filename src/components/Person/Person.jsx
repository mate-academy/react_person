import React from 'react';

export function Person({
  name,
  age,
  sex,
  partnerName,
  isMarried,
}) {
  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <>
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
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </>
  );
}
