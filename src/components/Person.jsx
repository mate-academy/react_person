import React from "react";
import PropTypes from "prop-types";
import './Person.scss';

const Person = ({ name, age, sex, isMarried, partnerName }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age">I am {age}</p>
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife\'s' : 'husband\'s'} name is ${partnerName}`
          : "I am not married"}
      </p>
    </section>
  );
};

Person.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  sex:PropTypes.string,
  isMarried:PropTypes.bool,
  partnerName:PropTypes.string
};

export default Person;
