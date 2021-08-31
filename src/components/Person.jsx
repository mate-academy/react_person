import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function Person({ person }) {
  const partner = person.sex === 'm' ? "wife's" : "husband's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {
        person.age ? (
          <p className="Person__age">
            {`I am ${person.age}`}
          </p>
        ) : (
          undefined
        )}
      {
      person.isMarried ? (
        <p className="Person__partner">
          {`My ${partner} name is ${person.partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
}

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

export default Person;
