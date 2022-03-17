import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age && (<p className="Person__age">{`I am ${age}`}</p>)}

    <p className="Person__partner">
      {isMarried
        ? (`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`)
        : ('I am not married')}
    </p>
  </section>
);

Person.defaultProps = {
  name: 'No name provided',
  sex: 'No sex provided',
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
};
