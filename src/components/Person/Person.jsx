import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const partnerStatus = (sex === 'm')
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {
          isMarried
            ? (`${partnerName} is my ${partnerStatus}`)
            : (`I am not married`)
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {
    name: 'Jeanne Louise Calment',
    age: 122,
    sex: 'f',
    isMarried: true,
    partnerName: 'Fernand Nicolas Calment',
  },
};
