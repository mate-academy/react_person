import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({ name, sex, isMarried, partnerName, age }) => {
  let married = '';

  if (isMarried && sex === 'm') {
    married = `My wife's name is ${partnerName}`;
  }

  if (isMarried && sex === 'f') {
    married = `My husband's name is ${partnerName}`;
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
      <p className="Person__partner">{married || 'Im not merried'}</p>
    </section>
  );
};

Person.defaultProps = {
  name: 'Rodion Raskolnikov',
  sex: 'm',
  isMarried: false,
  age: undefined,
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
