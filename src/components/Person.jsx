import React from 'react';
import PropTypes from 'prop-types';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line
export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName,
  } = person;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        <p className="Person__age">
          { age
            ? `I am ${age}`
            : null}
        </p>

        { isMarried
          ? (
            <p className="Person__partner">
              { sex === 'm'
                ? `My wife's name is ${partnerName}`
                : `My husband's name is ${partnerName}`}
            </p>
          )
          : <p>I am not married</p>}
      </section>
    </>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,

};
