import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const partner = person.sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partner}`
          : 'I am not married'
        }
      </p>

    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    isMarried: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string.isRequired,
  }),
};
