import React from "react";
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">
      { isMarried
        ? `My ${(sex === 'm')? 'wife'
        : 'husband'} name is ${partnerName}`
        : `I am not married`
      }
      </p>
    </section>
  </>  
);

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
}