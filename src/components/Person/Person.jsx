import React from 'react';

import PropTypes from 'prop-types';

export function Person({ person }) {
  const role = person.sex === 'f' ? 'husband' : 'wife';

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
          ? `My ${role}'s name is ${person.partnerName}`

          : 'I am not married'

        }
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string.isRequired,
};
