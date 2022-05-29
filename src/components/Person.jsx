import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ people }) => {
  return people.map(person => {
    const {
      name,
      age,
      isMarried,
      partnerName,
      sex,
    } = person;

    return (
      <React.Fragment key={name}>
        <section className="Person">
          <h2 className="Person__name">{`My name is ${name}`}</h2>
          {age
            ? <p className="Person__age">{`I am ${age}`}</p>
            : undefined}
          {isMarried
          && (sex === 'm'
            ? <p className="Person__partner">{ `My wife's name is ${partnerName}`}</p>
            : <p className="Person__partner">{ `My husband's name is ${partnerName}`}</p>
          )}

        </section>
      </React.Fragment>
    );
  });
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.boolean,
    partnerName: PropTypes.string,
  }),
};
