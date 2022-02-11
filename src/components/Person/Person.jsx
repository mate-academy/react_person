import React from 'react';

import './Person.scss';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = { ...person };
  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `My ${partnerSex}'s name is ${partnerName}`}
      </p>
    </section>
  );
};

export default Person;
