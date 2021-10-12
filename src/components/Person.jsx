import React from 'react';
import PropTypes from 'prop-types';

const Person = ({person}) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const partner = sex === 'm'
    ? `My wife's name is ${partnerName}`
    : `My husband's name is' ${partnerName}`
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partnerName">{isMarried && `${partner}`}</p>
    </section>
  )
}

Person.defaultProps = {
  data: {
    age: null,
    sex: 'unknown',
    partnerName: 'noname'
  }
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
}

export { Person };
