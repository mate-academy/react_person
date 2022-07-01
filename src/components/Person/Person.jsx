import React from 'react';
import './Person.scss';
import propTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && (<p className="Person__age">{`I am ${age}`}</p>)}

    {partnerName ? (
      <p className="Person__partner">
        {`My ${sex === 'm' ? 'wife\'s' : 'husband\'s'} name is ${partnerName}`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}

  </section>
);

Person.propTypes = {
  name: propTypes.string.isRequired,
};
