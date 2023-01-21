import React from 'react';

function Person(props) {
  const { name, age, sex, isMarried, partnerName } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}</p>
      ) : `I am not married`}
    </section>
  );
}

export default Person;
