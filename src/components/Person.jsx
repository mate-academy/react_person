import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, isMarried, sex, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    {age && (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
    )}
    <p className="Person__partner">
      {
        isMarried
          ? `My ${sex === 'f' ? "husband's" : "wife's"} name is ${partnerName}`
          : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  partnerName: '',
  age: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
