import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
  } = person;

  const partnerSex = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )
      }
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: 'Misha',
  age: 35,
  isMarried: true,
  partnerName: 'Masha',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
