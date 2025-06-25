import React from 'react';

function Person({ name, age, sex, isMarried, partnerName }) {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {age ? (
          `I am ${age}`
        ) : (
          ''
        )
        }
      </p>
      <p>
        {isMarried ? (
          `I have a ${partner}`
        ) : (
          `I am not married`
        )}
      </p>
      <p>{partnerName}</p>
    </section>
  );
}

export default Person;
