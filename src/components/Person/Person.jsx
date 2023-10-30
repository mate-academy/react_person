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
    {person.isMarried && (
    <>
      <p className="Person__partner">
        {person.partnerName}
        <span> is my </span>
        {person.sex === 'f' ? 'husband' : 'wife'}
      </p>
    </>
    )}
    {!person.isMarried && (
    <p className="Person__partner">I am not married</p>
    )}
  </section>
);
