import React from 'react';
import './Person.scss';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partner = sex === 'f' ? 'husbend' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">
        { isMarried ? `My ${partner} is ${partnerName}` : `I am not married` }
      </p>
    </section>
  );
};

export default Person;
