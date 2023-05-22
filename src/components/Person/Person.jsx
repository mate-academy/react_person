import React from 'react';

export function Person({
  person: { name, age, sex, isMarried, partnerName } = {},
}) {
  let msg = '';

  if (!isMarried) {
    msg = `I am not married`;
  } else if (sex === 'f') {
    msg = `${partnerName} is my husband`;
  } else {
    msg = `${partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
      <p className="Person__partner">{msg}</p>
    </section>
  );
}
