import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function Person({ name, age, sex, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}.`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}.`}
        </p>
      )}

      {isMarried ? (
        <p className="Person__partner">
          {`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}.`}
        </p>
      ) : (`I am not married.`)}
    </section>
  );
}

Person.defaultProps = {
  age: undefined,
  sex: undefined,
  isMarried: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
