import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const partner = props.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${props.name}`}</h2>
      {props.age && <p className="Person__age">{`I am ${props.age}`}</p>}
      {props.isMarried
        ? (
          <p className="Person__partner">
            {`My ${partner}'s name is ${props.partnerName}`}
          </p>
        )
        : <p className="Person__partner">I am not married</p>}
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: 'a secret',
};
