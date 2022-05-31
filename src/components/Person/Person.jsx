/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export const Person = ({ name, age, partnerName }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }

      {
        partnerName
          ? (
            <p className="Person__partner">
              {`My wife's name is ${partnerName}`}
            </p>
          )
          : <p>I am not married</p>

      }
    </section>
  );
};

export default Person;
