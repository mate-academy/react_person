export const Person = ({ person }) => {
  const sex = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className={`${person.age !== undefined ? 'Person__age' : 'Person__age--omit'}`}>
        {`I am ${person.age}`}
      </p>
      <p className="Person__partner">
        {person.isMarried ? (
          `${person.partnerName} is my ${sex}`
        ) : 'I am not married'}
      </p>
    </section>
  );
};
