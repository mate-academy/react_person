import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

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
        ? `My ${getPartner(sex)}'s name is ${partnerName}`
        : `I am not married`
      }
    </p>
  </section>
);

Person.defaultProps = {
  name: '',
  age: undefined,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

function getPartner(sex) {
  return sex === 'm' ? 'wife' : 'husband';
}
