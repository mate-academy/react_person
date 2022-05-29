import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const personeName = `My name is ${name}`;
  const personeAge = () => ((age) ? `I am ${age}` : null);

  const havePartner = () => {
    if (isMarried && sex === 'm') {
      return `My wife's name is ${partnerName}`;
    }

    if (isMarried && sex === 'f') {
      return `My husband's name is ${partnerName}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {personeName}
      </h2>
      <p className="Person__age">
        {personeAge()}
      </p>
      <p className="Person__partner">
        {havePartner(person)}
      </p>
    </section>
  );
};
