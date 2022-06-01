/* eslint-disable */
import React from 'react';
import '../../App.scss';

export default function Person(props) {
  let Partner = '';

  if (props.partner && props.sex === 'm') {
    Partner = `My wife's name is ${props.partner}`;
  } else if (props.partner && props.sex === 'f') {
    Partner = `My husband's name is ${props.partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
       { `My name is
        ${props.name}`}
      </h2>
      {
        props.age
        &&
        <p className="Person__age">
        {`I am
        ${props.age}`}
        </p>
      }
      <p className="Person__partner">
        {
        Partner || 'I am not married'
      }
      </p>
    </section>
  );
};

