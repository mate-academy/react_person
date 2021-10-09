import React from 'react';
import PropTypes from 'prop-types';



const Person = ({name, age, sex, isMarried, partnerName}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    <p className="Person__age">{age !== null ? `I am ${age}` : null}</p>
    <p className="Person__partner">{isMarried
      ? (sex === 'm' ? `My wife's name is ${partnerName}` : `My husband's name is ${partnerName}`)
      : `I am not married` }
    </p>
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: null,
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
}

export {Person};
