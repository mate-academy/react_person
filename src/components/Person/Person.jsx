import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const checkPartnerSex = personSex => (
    personSex === 'm' ? 'wife' : 'husband'
  );
  const getPartnerText = () => (
    isMarried
      ? `${partnerName} is my ${checkPartnerSex(sex)}`
      : 'I am not married'
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {person.age
      && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {getPartnerText()}
      </p>
    </section>
  );
};
