/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

const Person = ({
  name: firstName, age, sex, isMarried, partnerName,
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${firstName}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`}
      </p>
    </section>
  </>
);

export default Person;
