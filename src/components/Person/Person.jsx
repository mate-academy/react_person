/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = (person) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const wifeOrHusband = sex === 'm' ? 'wife' : 'husband';

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
          ? `My ${wifeOrHusband}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 18,
  sex: 'm',
  isMarried: false,
  partnerName: 'partnerName',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['m', 'w']),
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
