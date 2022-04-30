import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}
    {isMarried ? (
      <p className="Person__partner">
        {`My ${sex === 'm'
          ? "wife'"
          : "husband'"}s name is ${partnerName}`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
