import React from 'react';

export function Person({
  person: { name, age, sex, isMarried, partnerName } = {},
}) {
  function maritalStatusMessage() {
    let text = '';

    if (!isMarried) {
      text = `I am not married`;
    } else if (sex === 'f') {
      text = `${partnerName} is my husband`;
    } else {
      text = `${partnerName} is my wife`;
    }

    return text;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
      <p className="Person__partner">{maritalStatusMessage()}</p>
    </section>
  );
}
