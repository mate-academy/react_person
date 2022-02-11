import React from 'react';

import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <div className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">
      {age ? `I am ${age}` : 'I\'ll be young forever'}
    </p>
    <p className="Person__partner">
      {((!isMarried) && 'I am not married')
        || (sex === 'm'
          ? `My wife's name is ${partnerName}`
          : `My husband's name is ${partnerName}`)
      }
    </p>
  </div>
);
