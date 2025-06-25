export const Person = ({ person }) => (
  <>
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age !== undefined && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {!person.isMarried && <p>I am not married</p>}
      {person.isMarried && (
        person.sex === 'm'
          ? (
            `${person.partnerName} is my wife`
          ) : (
            `${person.partnerName} is my husband`
          )
      )}
    </p>
  </>
);
