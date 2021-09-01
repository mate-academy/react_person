import React from 'react';
import PropsTypes from 'prop-types';

import './Person.scss';

export const Person = (props) => {
  const person = { ...props.person };

  if (!props.person.name) {
    return '';
  }

  const marriedContent = (person.sex === 'm') ? (
    `My wife's name is ${person.partnerName}`
  ) : (
    `My husband's name is ${person.partnerName}`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {person.name}
      </h2>
      {person.age ? (
        <p className="Person__age">
          {'I am '}
          {person.age}
        </p>
      )
        : ''
      }
      <p className="Person__partner">

        {(person.isMarried) ? (marriedContent) : ('I am not married')}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: 0,
    isMarried: false,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropsTypes.shape({
    name: PropsTypes.string.isRequired,
    age: PropsTypes.number,
    sex: PropsTypes.string.isRequired,
    isMarried: PropsTypes.bool,
    partnerName: PropsTypes.string,
  }),
};
