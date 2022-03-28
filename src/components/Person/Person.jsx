import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;

  const spouse = sex === 'm'
    ? 'wife'
    : 'husband';

  const married = isMarried
    ? `My ${spouse}'s name is ${partnerName}`
    : `I'm not married`;

  return (
    <section className="person">
      <h2 className="person__name">{`My name is ${name}`}</h2>
      <p className="person__age">
        {age
          ? (`I am ${age}`)
          : <br />
        }
      </p>

      <p className="person__partner">
        {`${married}`}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: '',
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
