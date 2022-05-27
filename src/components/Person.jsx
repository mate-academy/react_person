import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {(sex === 'm' && isMarried && `My wife's name is ${partnerName}`)
          || (sex === 'f' && isMarried && `My husband's name is ${partnerName}`)
          || (!isMarried && 'I am not married')}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    name: '',
    sex: '',
    isMarried: false,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
