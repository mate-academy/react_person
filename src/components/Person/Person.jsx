import React from 'react';
import PropTypes from 'prop-types';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age > 0 && (<p className="Person__age">{`I am ${person.age}`}</p>)}

      {person.isMarried === true
        ? (
          <p className="Person__partner">
            {person.sex === 'm'
              ? `My wife's name is ${person.partnerName}`
              : `My husband's name is ${person.partnerName}`
            }
          </p>
        )
        : (
          <p className="Person__partner">not married</p>
        )
      }
    </section>
  );
}

Person.defaultProps = {
  person: {
    name: '',
    age: 0,
    sex: '',
    isMarried: false,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m'], ['f']),
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
