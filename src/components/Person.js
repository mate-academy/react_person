import React from 'react';
import PropTypes from 'prop-types';

export function Person({ name, age, partner, sex }) {
  let personPartner = "My wife's name is ";

  if (sex === 'f') {
    personPartner = "My husband's name is ";
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {partner ? `${personPartner} ${partner}` : `I am not married`}
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partner: PropTypes.string,
  sex: PropTypes.string,
};

Person.defaultProps = {
  name: 'Enter your name',
  age: 18,
  sex: 'Enter your gender',
  partner: 'Enter your partner',
};
