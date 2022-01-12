import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({
  name,
  age,
  partnerName,
}) => (
  <>
    <section>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : 'Age missing'}</p>
      <p className="Person__partner">
        {partnerName ? `My wife's name is ${partnerName}` : 'Single'}
      </p>
    </section>
  </>
);

Person.typeProps = {
  name: PropTypes.string,
  age: PropTypes.number,
  partnerName: PropTypes.string,
};
