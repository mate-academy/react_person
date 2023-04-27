import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => (
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

    {person.isMarried === true && person.sex === 'm'
        && (
          <p className="Person__partner">
            {person.partnerName}
            {' '}
            is my wife
          </p>
        )
    }

    {person.isMarried === true && person.sex === 'f'
        && (
          <p className="Person__partner">
            {person.partnerName}
            {' '}
            is my husband
          </p>
        )
    }

    {person.isMarried === false
      && (
        <p className="Person__partner">
          I am not married
        </p>
      )}
  </section>
);

Person.defaultProps = {
  age: 0,
};

Person.propTypes = {
  age: PropTypes.number,
};
