import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function Person({ name, age, partnerName, isMarried, sex }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age ? (
        <p className="Person__age">{`I am ${age}`}</p>
      ) : (null)}

      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'f' ? `husband's` : `wife's`} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool,
  sex: PropTypes.string,
};

Person.defaultProps = {
  name: 'no name',
  age: null,
  partnerName: null,
  isMarried: false,
  sex: null,
};

export default Person;
