import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
      {isMarried ? <p className="Person__partner">{`My ${partner} name is ${partnerName}`}</p> : 'I am not married'}
    </section>
  );
};

Person.defaultProps = {
  person: {
    name: 'No name',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.number,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
