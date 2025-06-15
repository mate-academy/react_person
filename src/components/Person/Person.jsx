import React from 'react';

export const Person = ( props ) => {
  let namePartner;

  if (!props.isMarried) {
    namePartner = "I am not married";
  } else {
    namePartner = props.sex === 'm'
      ? `${props.partnerName} is my wife`
      : `${props.partnerName} is my husband`;
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">My name is {props.name}</h2>
        {props.age ? <p className="Person__age">I am {props.age}</p> : null}
        <p className="Person__partner">{namePartner}</p>
      </section>
    </>
  )
};
