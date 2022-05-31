import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName: pName,
  } = person;

  const marriageStatus = isMarried
    ? (
      <p className="person__partner">
        {`My ${sex === 'm' ? 'wife' : 'husband'} name is ${pName}`}
      </p>
    )
    : (
      <p>I am not married</p>
    );

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="person">
      <h2 className="person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="person__age">{`I am ${age}`}</p>
      )}
      {marriageStatus}
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
