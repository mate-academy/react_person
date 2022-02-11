import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) => (
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
        My
        {` ${sex === 'm' ? 'wife' : 'husband'}'s `}
        name is
        {` ${partnerName}`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}

  </section>
);

Person.defaultProps = {
  name: 'no name',
  age: null,
  partnerName: 'no name',
  sex: 'no data',
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};

export default Person;
