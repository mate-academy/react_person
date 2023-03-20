import React from 'react';

export const Person = (props) => {
  const { person } = props;
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = sex === 'm'
    ? 'wife'
    : 'husband';

  const partner = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {typeof age === 'number' && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {partner}
      </p>
    </section>
  );
};
