import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const isMale = props.sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${props.name}`}</h2>
      {props.age && <p className="Person__age">{`I am ${props.age}`}</p>}
      {props.isMarried && (isMale
        ? (
          <p className="Person__partner">
            {`My wife's name is ${props.partnerName}`}
          </p>
        )
        : (
          <p className="Person__partner">
            {`My husband's name is ${props.partnerName}`}
          </p>
        ))}
      {!props.isMarried
        && <p className="Person__partner">I am not married</p>}
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  sex: null,
  partnerName: 'a secret',
};
