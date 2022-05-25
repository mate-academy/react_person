import React from 'react';
import './Person.scss';
// import { prototype } from 'cypress/types/bluebird';
// import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName,
  } = person;

  let part;

  if (sex === 'f') {
    part = 'husband';
  } else {
    part = 'wife';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {
        isMarried
          ? `My ${part}'s name is ${partnerName}`
          : 'I am not married'
        };
      </p>
    </section>
  );
};

// Person.defaultProps = {
//   name: 'Add name',
//   age: 'Add age',
//   sex: 'Add sex',
//   isMarried: undefined,
//   partnerName: undefined,
// };

// Person.propTypes.shape = ({
//   name: Prototypes.string,
//   age: Prototypes.number,
//   sex: Prototypes.string,
//   isMarried: PropTypes.boolean,
//   partnerName: PropTypes.string,
// });
