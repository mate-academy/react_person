/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-constant-condition */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { bool, number, string } from 'prop-types';
import React from 'react';

export const Person = ({ person }) => {
    return (
      <section className="Person">
        <h2 className="Person__name">
          My name is {person.name}
        </h2>
        {person.age && (
        <p className="Person__age">
          I am {person.age}
        </p>
            )}

        <p className="Person__partner">
          { person.isMarried
          ? `${person.partnerName} is my ${
            person.sex === 'm'
              ? 'wife'
              : 'husband'
          }`
          : 'I am not married'}
        </p>

      </section>
    );
};

Person.propTypes = {
    name: string,
    age: number,
    sex: 'm' || 'f',
    isMarried: bool,
    partnerName: string,
};

Person.defaultProps = {
    person: {
        name: '',
        age: null,
        partnerName: null,
    },
};
