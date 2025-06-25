import React from 'react';
import PropTypes from 'prop-types';

export function Person({
  person,
}) {
  const peopleSex = personSex => (person.sex === 'm' ? 'wife' : 'husband');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${peopleSex(person.sex)}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.string.isRequired,
};
