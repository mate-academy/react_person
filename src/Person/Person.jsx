/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, partnerName }) => {
  return (
    <section className="Person">
      {
        name && (
          <h2 className="Person__name">
            My name is&nbsp;
            {name}
          </h2>
        )

      }

      {
        age && (
          <p className="Person__age">
            I am&nbsp;
            { age }
          </p>
        )
      }

      {
        partnerName
          ? (
            <p className="Person__partner">
              My wife&apos;s name is&nbsp;
              { partnerName }
            </p>
          )
          : <p>I am not married</p>
      }
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  partnerName: PropTypes.string.isRequired,
};

export default Person;
