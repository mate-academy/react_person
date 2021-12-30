import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    {!age || (<p className="Person__age">{`I am ${age}`}</p>)}
    <p className="Person__partner">
      {!isMarried
        ? 'I am not married'
        : `My ${sex === 'm'
          ? `wife's`
          : `husband's`}
         name is ${partnerName}`}
    </p>
  </section>
);

Person.defaultProps = {
  partnerName: 'Noname',
  age: 18,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
