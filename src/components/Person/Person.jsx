// Write code here
import React from 'react';

export default function Person(props) {
  return (
    <div>
      <h2 className="Person__name">
        My name is {props.name}
      </h2>
      {props.age ? (
        <p className="Person__age">
          I am {props.age}
        </p>
      ) : (
        null
      )} 
      {props.partnerName ? (
        <p className="Person__partner">
          My wife&apos;s or husband&apos;s name is {props.partnerName}
      </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </div>
  );
}
