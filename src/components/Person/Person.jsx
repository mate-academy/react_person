import React from 'react';

function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  function partnerPhrase(gender) {
    if (gender === 'f') {
      return `My husband's name is ${partnerName}`;
    }

    return `My wife's name is ${partnerName}`;
  }

  const partner = isMarried ? partnerPhrase(sex) : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{typeof age !== 'undefined' ? `I am ${age}` : null}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
}

export default Person;
