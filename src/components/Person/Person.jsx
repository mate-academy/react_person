import React from 'react';
// import PropTypes from 'prop-types';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    {person.isMarried === false
      ? (
        <p className="Person__partner">
          I am not married
        </p>
      )
      : (
        <p className="Person__partner">
          { person.sex === 'm'
            ? `${person.partnerName} is my wife`
            : `${person.partnerName} is my husband`
          }
        </p>
      )
  }
  </section>
);

// Person.defaultProps = {
//   age: '',
// };

// Person.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   sex: PropTypes.string,
//   isMarried: PropTypes.bool.isRequired,
//   partnerName: PropTypes.string,
// };
