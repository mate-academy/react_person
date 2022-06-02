import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = (sex === 'f')
    ? 'husband'
    : 'wife';

  return (
    <section className="Person card">
      <h2 className="
        Person__name
        title
        is-4"
      >
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="
          Person__age
          subtitle
          is-6"
        >
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__marriage content">
        {!isMarried
          ? 'I am not married'
          : (`My ${partner}'s name is ${partnerName}`)}
      </p>

    </section>
  );
};

Person.defaultProps = {
  person: 'no person',
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool,
    partner: PropTypes.string,
  }),
};
