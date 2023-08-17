export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && (
      <p className="Person__age">I am {person.age}</p>
    )}
    <p className="Person__partner">
      {person.isMarried === false ? (
        <span>I am not married</span>
      ) : person.sex === 'f' ? (
        <span>{person.partnerName} is my husband</span>
      ) : (
        <span>{person.partnerName} is my wife</span>
      )}
    </p>
  </section>
);
