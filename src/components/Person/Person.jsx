// Write code here
import React from 'react';

export default function Person(props) {
  return (
    <div>
      <h2 className="Person__name">
        My name is
        {' '}
        {props.name}
      </h2>
      {props.age ? (
        <p className="Person__age">
          I am
          {' '}
          {props.age}
        </p>
      ) : (
        null
      )}
      <p className="Person__partner">
        {props.isMarried
          ? (`My ${props.sex === 'm' ? 'wife\'s' : 'husband\'s'} name is ${props.partnerName}`)
          : ('I am not married')}
      </p>
    </div>
  );
}
