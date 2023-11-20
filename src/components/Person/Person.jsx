import React from 'react';

export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props.person;

  const partnerTitle = sex === 'm' ? 'wife' : 'husband';

  const myPartnerTitle = isMarried
    ? `${partnerName} is my ${partnerTitle}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Number.isFinite(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {myPartnerTitle}
      </p>
    </section>
  );
};
