import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  function typeOfPartner() {
    return sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `My ${typeOfPartner()}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

export default Person;
