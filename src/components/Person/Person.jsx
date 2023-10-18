import React from 'react';
import Proptypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {isMarried
          ? (`${partnerName} is my ${partner}`)
          : ('I am not married')
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number,
  sex: Proptypes.string,
  isMarried: Proptypes.bool,
  partnerName: Proptypes.string,
};

Person.defaultProps = {
  name: 'John Doe',
  age: Infinity,
  sex: 'Prefer no to say',
  isMarried: false,
  partnerName: 'N/a',
};
