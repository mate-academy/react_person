import React from 'react';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const wifeOrHusbund = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          {'I am '}
          {age}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${wifeOrHusbund}`
        }
      </p>
    </section>
  );
};
