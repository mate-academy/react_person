import React from 'react';
import propTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (<p className="Person__age">{`I am ${age}`}</p>)}
      {isMarried
        ? (<p className="Person__partner">{`${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`}</p>)
        : (<p className="Person__partner">I am not married</p>)}
    </section>
  );
};

Person.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number,
  sex: propTypes.string.isRequired,
  isMarried: propTypes.bool.isRequired,
  partnerName: propTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};
