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

  const partnersSex = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriedStatus = isMarried
    ? `${partnerName} is my ${partnersSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">I am 25</p>
      )}

      <p className="Person__partner">
        {marriedStatus}
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
