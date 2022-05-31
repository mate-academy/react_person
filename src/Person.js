import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const personName = `My name is ${name}`;
  const personeAge = () => ((age) ? `I am ${age}` : null);

  const havePartner = () => {
    const partnerSex = sex === 'm' ? 'wife' : 'husband';

    if (isMarried) {
      return `My ${partnerSex}'s name is ${partnerName}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {personName}
      </h2>
      <p className="Person__age">
        {age && personeAge()}
      </p>
      <p className="Person__partner">
        {havePartner(person)}
      </p>
    </section>
  );
};
