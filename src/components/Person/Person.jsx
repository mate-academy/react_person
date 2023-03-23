import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const partnerStatus = sex === 'f'
    ? 'husband'
    : 'wife';

  const relationshipStatus = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age > 0
        && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }

      <p className="Person__partner">
        {relationshipStatus}
      </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
