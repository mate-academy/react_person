import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  function isThePersonMarried(value) {
    if (value) {
      return (
        <p className="Person__partner">
          {
            sex === 'm'
              ? `${partnerName} is my wife`
              : `${partnerName} is my husband`
          }
        </p>
      );
    }

    return <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isThePersonMarried(isMarried)}
    </section>
  );
};

Person.defaultProps = {
  person: {
    name: '',
    age: null,
    sex: '',
    isMarried: false,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
