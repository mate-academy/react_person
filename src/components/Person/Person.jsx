import React from 'react';

export function Person(props) {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = props.person;

  const partnerStatus = sex === 'm'
    ? 'wife'
    : 'husband';

  const partnerInfo = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

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
        {partnerInfo}
      </p>
    </section>
  );
}
