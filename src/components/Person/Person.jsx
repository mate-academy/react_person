import React from 'react';
// import cn from 'classnames';

export const Person = ({ person: {
  name,
  age = 0,
  sex,
  isMarried,
  partnerName,

} }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      { age !== 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        { isMarried
          ? `${partnerName} is my ${partner}`
          : `I am not married`
        }
      </p>
    </section>
  );
};
