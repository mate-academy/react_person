import React from 'react';
import { PropTypes } from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const possiblePartner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age >= 0
        && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}

      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${possiblePartner}` : 'I am not married'}
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
