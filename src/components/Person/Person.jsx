import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  sex,
  isMarried,
  age,
  partnerName,
}) => (
  <div className="Person">
    <h2 className="Person__name">
      My name is
      {' ' + name}
    </h2>
    <p className="Person__age">
      {age ? `I am ${age}` : null}
    </p>
    <p className="Person__partner">
      {isMarried ? `My ${sex === 'f' ? 'husband`s' : 'wife`s'} name is ${partnerName}` : 'I am not married'}
    </p>
  </div>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Person;
