import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__sex">
        {`Sex: ${sex}`}
      </p>

      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `My ${partner}'s name is ${partnerName}`}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: 0,
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
