export const Person = ({ person }) => (
  <section className="Person">
    {person.name && (
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
    )}

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {person.isMarried && (
        person.sex === 'f' && (`${person.partnerName} is my husband`)
      )}

      {person.isMarried && (
        person.sex === 'm' && (`${person.partnerName} is my wife`)
      )}

      {!person.isMarried && (
        'I am not married'
      )}
    </p>
  </section>
);
