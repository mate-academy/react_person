import React from 'react';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const partnerContent = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerContent}</p>
    </section>
  );
};

export default Person;
