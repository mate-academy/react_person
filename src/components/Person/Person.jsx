import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const ageInfo = age && <p className="Person__age">{`I am ${age}`}</p>;
  const Male = sex === 'm';
  const partnerSex = Male ? 'wife' : 'husband';
  const marriedStatus = isMarried ? `${partnerName} is my ${partnerSex}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {ageInfo}

      <p className="Person__partner">{marriedStatus}</p>
    </section>
  );
};
