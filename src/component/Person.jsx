import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function getPartnerStatus(sex) {
  return sex === 'f' ? 'husband' : 'wife';
}

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">{age && `I am ${age}`}</p>
    <p className="Person__partner">
      {partnerName
        ? `My ${getPartnerStatus(sex)}’s name is ${partnerName}`
        : 'I am not married'}
    </p>
  </section>
);

Person.typeProps = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  partnerName: '',
  age: null,
};

export default Person;
