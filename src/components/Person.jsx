import React from 'react';
import { UserType } from './propTypes';

Person.propTypes = UserType;

export default function Person(props) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is `}
        { props.name}
      </h2>
      {props.age && (
        <>
          <p className="Person__age">
            {`I am `}
            {props.age}
          </p>
        </>
      )}
      {props.partnerName ? (
        <>
          <p className="Person__partner">
            {`My `}
            {props.sex === 'm' ? 'wife' : 'husband'}
            {`'s name is `} 
            { props.partnerName}
          </p>
        </>
      ) : (
        <>
          <p className="Person__partner">I am not married</p>
        </>
      )}
    </section>
  );
}
