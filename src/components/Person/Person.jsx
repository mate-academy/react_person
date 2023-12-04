export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className={`${person.age !== undefined ? 'Person__age' : 'person__age--omit'}`}>
      {`I am ${person.age}`}
    </p>
    <p className="Person__partner">
      {person.isMarried === true ? (
        `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`
      ) : 'I am not married'}
    </p>
  </section>
);
