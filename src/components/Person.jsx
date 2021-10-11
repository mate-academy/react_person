import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  if (name) {
    return (
      <section className='Person'>
        <h2 className='Person__name'>My name is {name}</h2>
        <p className="Person__age">{age && `I am ${age}`}</p>
        <p className="Person__partner">
          {isMarried === true
            ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
            : 'I am not married'
          }
        </p>
      </section>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
