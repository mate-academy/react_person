import React from 'react';

const Person = ({ person }) => {
  const { name, age, sex } = person;

  const gender = sex === 'm' ? 'masculino' : 'feminino';

  return (
    <section className="Person" data-cy="person">
      <h2 className="Person__name" data-cy="person-name">
        {name}
      </h2>

      {age && (
        <p className="Person__age" data-cy="person-age">
          {age}
        </p>
      )}

      <p className="Person__gender" data-cy="person-gender">
        {gender}
      </p>
    </section>
  );
};

export default Person;
