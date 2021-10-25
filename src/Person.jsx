import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, sex, partnerName, isMarried }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    <p className="Person__age">
      {`I am ${age}`}
    </p>
    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm'
          ? 'wife&apos;s'
          : 'husband&apos;s'} name is ${partnerName}`
        : `I am not married`}
    </p>
  </section>
);

Person.defaultProps = {
  age: 'No age',
  partnerName: 'No partnerName',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};

export default Person;
