import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName: pName,
  } = person;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      {isMarried
        ? (
          <p className="Person__partner">
            {`My ${sex === 'm' ? 'wife' : 'husband'} name is ${pName}`}
          </p>
        )
        : (
          <p>I am not married</p>
        )}
    </section>
  );
};

Person.defaultProps = {
  age: 0,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
};
