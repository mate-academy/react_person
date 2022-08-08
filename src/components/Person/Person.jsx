import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried ? `My ${partner}'s name is ${partnerName}` : 'I am not married'}
      </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
