import React from 'react';

const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    <Age age={age} />
    <Marriage sex={sex} isMarried={isMarried} partnerName={partnerName} />
  </section>
);

const Age = ({ age }) => {
  if (age) {
    return (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    );
  }

  return '';
};

const Marriage = ({ sex, isMarried, partnerName }) => {
  if (isMarried && sex === 'm') {
    return (
      <p className="Person__partner">
        {`My wife's name is ${partnerName}`}
      </p>
    );
  }

  if (isMarried && sex === 'f') {
    return (
      <p className="Person__partner">
        {`My husband's name is ${partnerName}`}
      </p>
    );
  }

  return (
    <p className="Person__partner">I am not married</p>
  );
};

export default Person;
