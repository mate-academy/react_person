import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      {isMarried ? (
        <p className="Person__partner">
          {'My '}
          {sex === 'f' ? 'husband\'s ' : 'wife\'s '}
          {`name is ${partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};
