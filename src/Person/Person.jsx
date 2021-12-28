import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const marriedSentence
    = `My
    ${sex === 'm' ? 'wife' : 'husband'}
    's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? marriedSentence
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
