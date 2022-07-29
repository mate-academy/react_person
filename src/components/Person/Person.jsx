import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personPartnerMessage;

  if (isMarried && sex === 'm') {
    personPartnerMessage = ` My wife's name is ${partnerName}`;
  } else if (isMarried && sex === 'f') {
    personPartnerMessage = `My husband's name is ${partnerName}`;
  } else {
    personPartnerMessage = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      { age && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">{personPartnerMessage}</p>
    </section>
  );
};

Person.defaultProps = {
  name: 'NoNamePerson',
  age: null,
  sex: 'm',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  sex: PropTypes.oneOf(['m', 'f']),
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
