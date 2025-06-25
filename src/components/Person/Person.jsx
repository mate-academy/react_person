import React from 'react';
import cn from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const MALE = 'm';
  let partnerLabel;

  if (isMarried) {
    partnerLabel = sex === MALE ? 'wife' : 'husband';
  } else {
    partnerLabel = 'not married';
  }

  const partnerText = cn({
    [`${partnerName} is my ${partnerLabel}`]: isMarried && partnerName,
    [`I am ${partnerLabel}`]: !isMarried || !partnerName,
  });

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
