import React from 'react';
import './Person.scss';
// eslint-disable-next-line
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const wifeHusband = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {
          isMarried
            ? `My ${wifeHusband}'s name is ${partnerName}`
            : 'I am not married'
        }
        ;
      </p>
    </section>
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
