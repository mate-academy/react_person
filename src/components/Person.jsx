import React from 'react';
import PropTypes from 'prop-types';

export function Person(props) {
  const { name, age, partnerName, sex, isMarried } = props.person;
  const partner = sex === 'm' ? "wife's" : "husband's";
  const marriedMessage = isMarried
  ? `My ${partner} name is ${partnerName}`
  : `I am not married`;


  return (
    <section className="person">
      <h2 className="person__name">My name is {name}</h2>

      {age && <p className="person__age">I am {age}</p>}

      <p className="person__married"> { marriedMessage } </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool.isRequired,
    partner: PropTypes.string,
  })
}
