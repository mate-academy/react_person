import React from 'react';

export function Person({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) {
  const partner = sex === 'm'
    ? `My wife's name is ${partnerName}`
    : `My husband's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}

      <p className="Person__partner">
        {partnerName ? partner : 'I am not married'}
      </p>

    </section>
  );
}
