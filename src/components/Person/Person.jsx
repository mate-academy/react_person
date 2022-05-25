import React from 'react';
import './Person.scss';

export const Person = ({ personInfo }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = personInfo;

  const noName = name || ': No name !';

  const wifeOrHusband = (sex === 'm') ? 'wife' : 'husband';
  const checkStatus = isMarried ? `My ${wifeOrHusband}'s name is ${partnerName}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${noName}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {checkStatus}
      </p>
    </section>
  );
};
