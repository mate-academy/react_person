import './Person.scss';

export const Person = ({ person }) => (

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
      {person.isMarried === true ? (
        <>
          {person.sex === 'm' ? (
            <>
              {`${person.partnerName} is my wife`}
            </>
          ) : (
            <>
              {`${person.partnerName} is my husband`}
            </>
          )
          }
        </>
      ) : (
        <>
          I`m not married
        </>
      )}
    </p>
  </section>
);
