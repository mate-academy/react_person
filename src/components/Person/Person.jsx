import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const renderPartner = () => {
    if (!isMarried) {
      return <p className="Person__partner">I am not married</p>;
    }

    // prettier-ignore
    const partnerLabel = sex === 'm'
      ? 'wife'
      : 'husband';

    return (
      <p className="Person__partner">
        {partnerName} is my {partnerLabel}
      </p>
    );
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      {renderPartner()}
    </section>
  );
};
