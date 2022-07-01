import React from 'react';
import './Person.scss';

const Person = ({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      {isMarried ? (
        <p className="Person__partner">
          {`My ${sex === 'm' ? "wife's" : "husband's"} name is ${partnerName}`}
        </p>
      ) : <p className="Person__partner">I am not married</p>}
    </section>
  </>
);

export default Person;
