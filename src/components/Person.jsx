import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  let maritalStatus = 'I am not married';

  if (isMarried && sex === 'm') {
    maritalStatus = `My wife's name is ${partnerName}`;
  }

  if (isMarried && sex === 'f') {
    maritalStatus = `My husband's name is ${partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
