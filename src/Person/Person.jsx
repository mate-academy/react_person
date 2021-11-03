/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried || 'I am not married'}

        {person.isMarried
         && `My 
              ${person.sex === 'm' ? 'wife' : 'husband'}'s
              name is ${person.partnerName}`
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.object,
};

Person.defaultProps = {
  person: {},
};

export default Person;
