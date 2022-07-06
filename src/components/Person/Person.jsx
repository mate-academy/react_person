import React from 'react';
import './Person.scss';
import propTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
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
      {
        isMarried
          ? `My ${sex === 'm' ? 'wife\'s' : 'husband\'s'} name is ${partnerName}`
          : 'I am not married'
      }
    </p>
  </section>
);

Person.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  sex: propTypes.string.isRequired,
  isMarried: propTypes.bool.isRequired,
  partnerName: propTypes.string,
};

Person.defaultProps = {
  partnerName: '',
};

export default Person;
