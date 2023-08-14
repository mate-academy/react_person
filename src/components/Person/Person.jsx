import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried = null,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? `wife`
    : `husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'
        }
      </p>

    </section>
  );
};

Person.protoTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
