import React from 'react';

function whichPartner(objToCheck) {
  return `My ${objToCheck.sex === 'm'
    ? 'wife\'s'
    : 'husband\'s'} name is ${objToCheck.partnerName}`;
}

export const Person = ({ personObj }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${personObj.name}`}
    </h2>

    {personObj.age && (
      <>
        <p className="Person__age">
          {`I am ${personObj.age}`}
        </p>
      </>
    )}

    <p className="Person__partner">
      { personObj.isMarried
        ? whichPartner(personObj)
        : 'I am not married' }
    </p>
  </section>
);
