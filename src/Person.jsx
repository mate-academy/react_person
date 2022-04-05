import React from 'react';
import './App.scss';

const Person = (props) => {
  let married;

  if (props.sex === 'm' && props.isMarried) {
    married = `My wife's name is ${props.partnerName}`;
  } else if (props.sex === 'f' && props.isMarried) {
    married = `My husband's name is ${props.partnerName}`;
  } else {
    married = 'I am not married';
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${props.name}`}
        </h2>
        <p className="Person__age">{props.age ? `I am ${props.age}` : null}</p>
        <p className="Person__partner">{married}</p>
      </section>
    </div>
  );
};

export default Person;
