import React from 'react';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  let personPartner = '';

  if (isMarried) {
    personPartner = sex === 'f' ? `My husband's name is ${partnerName}`
      : `My wife's name is ${partnerName}`;
  } else {
    personPartner = 'I am not married';
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="Person">
      <h2 className="Person__name">
        My name is
        { name}
      </h2>
      <p className="Person__age">
        I am
        { age}
      </p>
      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
};
