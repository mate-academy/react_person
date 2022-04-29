import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  let reply = '';

  if (isMarried === true && partnerName) {
    if (sex === 'm') {
      reply = `My wife's name is ${partnerName}`;
    } else {
      reply = `My husband's name is ${partnerName}`;
    }
  }

  if (isMarried === true && !partnerName) {
    reply = 'I am married';
  }

  if (isMarried === false) {
    reply = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {name ? `My name is ${name}` : 'no person'}
      </h2>
      <p className="Person__age">
        {age ? `I am ${age}` : 'no age information'}
      </p>
      <p className="Person__partner">
        {reply}
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
