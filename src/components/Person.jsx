import React from 'react';
import Proptypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
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
    {!isMarried && (
      <p className="Person__partner">
        I am not married
      </p>
    )}
    {isMarried && sex === 'f' && (
      <p className="Person__partner">
        My husband&apos;s name is
        {` ${partnerName}`}
      </p>
    )}
    {isMarried && sex === 'm' && (
      <p className="Person__partner">
        My wife&apos;s name is
        {` ${partnerName}`}
      </p>
    )}
  </section>
);

Person.defaultProps = {
  age: null,
  sex: 'm',
  isMarried: true,
  partnerName: 'I am not married',
};

Person.propTypes = {
  name: Proptypes.string.isRequired,
  age: Proptypes.number,
  sex: Proptypes.string,
  isMarried: Proptypes.bool,
  partnerName: Proptypes.string,
};

export default Person;
