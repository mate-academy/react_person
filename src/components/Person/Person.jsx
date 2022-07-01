import React from 'react';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partnerSex = () => (sex === 'm' ? 'wife' : 'husband');

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {` ${age}`}
        </p>
      )}
      <p>{isMarried ? `My ${partnerSex()} ${partnerName}` : 'I am not married'}</p>
    </section>
  );
}
