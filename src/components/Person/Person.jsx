import React from 'react';

const Person = ({ name, age = 0, sex, isMarried, partnerName }) => {
  let blockMarriage = <p className="Person__partner">I am not married</p>;
  let blockAge = '';

  if (age > 0) {
    blockAge = (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    );
  }

  if (isMarried && sex === 'm') {
    blockMarriage = (
      <p className="Person__partner">
        {`My wife's name is ${partnerName}`}
      </p>
    );
  }

  if (isMarried && sex === 'f') {
    blockMarriage = (
      <p className="Person__partner">
        {`My husband's name is ${partnerName}`}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      { blockAge }
      { blockMarriage }
    </section>
  );
};

export default Person;
