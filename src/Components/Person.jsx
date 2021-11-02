import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {` ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {(!isMarried && 'I am not married')
          || (isMarried && sex === 'm'
          && `My wife's name is ${partnerName}`)
          || (isMarried && sex === 'f'
          && `My husband's name is ${partnerName}`)}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
