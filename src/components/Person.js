import React from 'react';
import { PropTypes } from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is&nbsp;
      {person.name}
    </h2>
    {person.age && (
      <p className="Person__age">
        I am&nbsp;
        {person.age}
      </p>
    )}
    {person.isMarried ? (
      <p className="Person__partner">
        My &nbsp;
        {person.sex === 'f' ? 'wife' : 'husbend'}
        &apos;s name is&nbsp;
        {person.partnerName}
      </p>
    ) : (
      'I am not merried'
    )
    }
  </section>
);

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
