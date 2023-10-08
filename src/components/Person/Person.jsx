import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        { isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultPropType = {
  age: null,
  isMarried: null,
  partnerName: null,
};

Person.propType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.boolean,
  partnerName: PropTypes.string,
};
