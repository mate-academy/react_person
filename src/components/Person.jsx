import React from 'react';
import PropsTypes from 'prop-types';

const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      {name ? `My name is ${name}` : 'It\'s a secret'}
    </h2>
    <p className="Person__age">
      {age ? `I am ${age}` : 'I\'m not old'}
    </p>
    {isMarried ? (
      <p className="Person__partner">
        My
        {sex === 'm' ? ' wife\'s ' : ' husband\'s '}
        name
        {' is '}
        <b>{partnerName}</b>
      </p>
    ) : <p className="Person__partner">I am not married</p>
    }
  </section>
);

Person.propsTypes = {
  name: PropsTypes.string,
  age: PropsTypes.oneOfType([
    PropsTypes.string,
    PropsTypes.number,
  ]),
  sex: PropsTypes.string,
  isMarried: PropsTypes.bool,
  partnerName: PropsTypes.string,
};

export default Person;
