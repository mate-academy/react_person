/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let spouse;

  sex === 'm'
    ? spouse = 'wife'
    : spouse = 'husband';

  let married;

  isMarried
    ? married = `My ${spouse}'s name is ${partnerName}`
    : married = `I'm not married`;

  let personAge;

  age === undefined
    ? personAge = ''
    : personAge = `I'm ${age}`;

  return (
    <section className="person">
      <h2 className="person__name">{`My name is ${name}`}</h2>
      <p className="person__age">{`${personAge}`}</p>
      <p className="person__partner">
        {`${married}`}
      </p>
    </section>
  );
}

Person.defaultProps = {
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
