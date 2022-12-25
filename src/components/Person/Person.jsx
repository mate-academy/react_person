import React from 'react';
import propTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

// I'm curious why the code below isn't reachable???

Person.defaultProps = {
  person: {
    age: null,
  },
};

Person.propTypes = {
  person: propTypes.shape({
    name: propTypes.string.isRequired,
    age: propTypes.number,
    sex: propTypes.string,
    isMarried: propTypes.bool,
    partnerName: propTypes.string,
  }),
};
