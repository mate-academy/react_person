import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const partnerSex = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>

      {person.age > 0
        && (
          <p className="Person__age">
            I am
            {' '}
            {person.age}
          </p>
        )
      }

      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </p>

    </section>
  );
};

Person.defaultProps = {
  age: 0,
};

Person.propTypes = {
  age: PropTypes.number,
};
