import React from 'react';
import './Person.scss';
import PropsTypes from 'prop-types';

export const Person = (props) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husbend'}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.propsTypes = {
  name: PropsTypes.string.isRequired,
  age: PropsTypes.number,
  sex: PropsTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropsTypes.bool.isRequired,
  partnerName: PropsTypes.string,
};
