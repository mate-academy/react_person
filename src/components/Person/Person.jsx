const MALE_SIGN = 'm';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age
      && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )
    }

    <p className="Person__partner">
      {!person.isMarried && ('I am not married')}
      {person.isMarried && (
        person.sex === MALE_SIGN ? (
          `${person.partnerName} is my wife`
        ) : (
          `${person.partnerName} is my husband`
        ))}
    </p>
  </section>
);
