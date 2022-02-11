import React from 'react';
import './Person.scss';

const Person = (props) => {
  let partnerType = 'wife&apos;s';

  if (props.person.sex === 'm') {
    partnerType = 'wife\'s';
  } else {
    partnerType = 'husband\'s';
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          My name is
          {props.person.name}
        </h2>
        <p className="Person__age">
          {props.person.age ? `I am ${props.person.age}` : ''}
        </p>
        <p className="Person__partner">
          {props.person.isMarried
            ? `My ${partnerType} name is ${props.person.partnerName}`
            : `I am not married`}
        </p>
      </section>
    </>
  );
};

export default Person;
