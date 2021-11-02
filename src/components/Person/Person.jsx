import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({ name, sex, isMarried, partnerName, age }) => {
  let merried;

  if (isMarried && sex === 'm') {
    merried = (
      <p className="Person__partner">
        My wife&apos;s name is
        {' '}
        {partnerName}
      </p>
    );
  }

  if (isMarried && sex === 'f') {
    merried = (
      <p className="Person__partner">
        My husband&apos;s name is
        {' '}
        {partnerName}
      </p>
    );
  }

  return (
    <section className="Person">
      {name && (
      <h2 className="Person__name">
        My name is&nbsp;
        {name}
      </h2>
      )}
      {age && (
      <p className="Person__age">
        I am&nbsp;
        {age}
      </p>
      )}
      {isMarried
        ? merried
        : (<p className="Person__partner">I&apos;m not married</p>)}
    </section>
  );
};

Person.defaultProps = {
  name: 'Rodion Raskilnikov',
  sex: 'm',
  isMarried: false,
  age: 23,
  partnerName: 'Sonya Marmeladova',
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
