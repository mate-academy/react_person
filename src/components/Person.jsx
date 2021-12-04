import React from 'react';
import './Person.css';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partner = sex === 'f' ? 'husbend' : 'wife';

  return (
    <section className="person">
      <h2 className="person__name">{`My name is ${name}`}</h2>
      <p className="person__age">{age ? `I am ${age}` : null}</p>
      <p className="person__partner">
        { isMarried ? `My ${partner} is ${partnerName}` : `I am not married` }
      </p>
    </section>
  );
};

export default Person;
