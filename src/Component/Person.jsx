import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;

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
};

Person.defaultProps = {
  age: 0,
  sex: 'm',
  isMarried: false,
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
