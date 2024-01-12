export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {` `}
      {person.name}
    </h2>
    {person.age !== undefined && (
    <p className="Person__age">
      <span>{`I am ${person.age}`}</span>
    </p>
    )}
    <p className="Person__partner">
      {(person.isMarried && person.sex === 'm') ? <span>{`${person.partnerName} is my wife`}</span> : (
        ''
      )}
      {(person.isMarried && person.sex === 'f') ? <span>{`${person.partnerName} is my husband`}</span> : (
        ''
      )}
      {(!person.isMarried) ? <span>I am not married</span> : (
        ''
      )}
    </p>
  </section>
);
