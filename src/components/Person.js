import React from 'react';
import './Person.scss';

function whoIsPartner(sex) {
  if (sex === 'f') {
    return 'husband';
  }

  return 'wife';
}

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partner,
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      {isMarried ? (
        <p className="Person__partner">
          {`My ${whoIsPartner(sex)}'s name is ${partner}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  </>
);
