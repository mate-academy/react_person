import React from 'react';
import './Person.scss';

const Person = ({ props }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? (`My ${partner}'s name is ${partnerName}`)
          : ('I am not married')}
      </p>

    </section>
  );
};

export default Person;
