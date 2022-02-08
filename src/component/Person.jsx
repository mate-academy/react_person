import React from 'react';
import './Person.scss';
import PropsTypes from 'prop-types';

const Persone = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="person">
    <h2 className="person__name">{`My name is ${name}`}</h2>
    {age && (<p className="person__age">{`I am ${age}`}</p>)}
    <p className="person__partner">
      {isMarried ? `
      My ${sex === 'm' ? "wife's" : "husband's"} name is ${partnerName}
      ` : 'I am not married'}
    </p>
  </section>
);

Persone.propsTypes = {
  name: PropsTypes.string,
  age: PropsTypes.number,
  sex: PropsTypes.string,
  isMarried: PropsTypes.bool,
  partnerName: PropsTypes.string,
};

export default Persone;
