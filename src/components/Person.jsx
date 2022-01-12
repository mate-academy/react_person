import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

function partner(partnerSex) {
  return partnerSex === 'm' ? 'wife' : 'husband';
}

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <section>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">
        {isMarried
          ? `My ${partner(sex)}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  </>
);

Person.typeProps = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
