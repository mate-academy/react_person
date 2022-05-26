import React from 'react';
import './Person.scss';

function marriage(props) {
  if ((props.props.sex === 'm') && (props.props.isMarried)) {
    return (`My wife's name is ${props.props.partnerName}`);
  }

  if ((props.props.sex === 'f') && (props.props.isMarried)) {
    return (`My husband's name is ${props.props.partnerName}`);
  }

  return ('I am not married');
}

function Person(props) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${props.props.name}`}
      </h2>
      <p className="Person__age">
        {
          props.props.age ? (`I am  ${props.props.age}`) : ''
        }
      </p>
      <p className="Person__parthner">
        {marriage(props)}
      </p>
    </section>
  );
}

export default Person;
