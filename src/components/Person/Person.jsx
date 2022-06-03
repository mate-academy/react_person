import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const {
    name, age, sex, isMarried, partnerName,
  } = props;

  function partner() {
    if (sex === 'm') {
      return `My wife's name is ${partnerName}`;
    }

    return `My husband's name is ${partnerName}`;
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        <p className="Person__partner">
          {isMarried ? partner() : 'I am not married'}
        </p>
      </section>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
};
