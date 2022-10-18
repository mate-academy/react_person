import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age
        && <p className="Person__age">{`I am ${person.age}`}</p>
      }
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {},
};
