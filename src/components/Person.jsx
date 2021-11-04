import React from 'react';
import PropsType from 'prop-types';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let partner;

  if (sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{ age ? `I am ${age}` : null}</p>
      <p className="Person__partner">
        {
        isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropsType.string.isRequired,
  age: PropsType.number,
  sex: PropsType.string.isRequired,
  isMarried: PropsType.bool.isRequired,
  partnerName: PropsType.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

export default Person;
