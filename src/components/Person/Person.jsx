import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

const Person = ({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">
      {age
        ? (`I am ${age}`)
        : ('Age not specified')
      }
    </p>
    <p className="Person__partner">
      {isMarried
        ? (`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`)
        : (`I am not married`)
      }
    </p>
  </section>
);

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

export default Person;
