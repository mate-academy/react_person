export const Person = ({ person }) => {
  const MALE = 'm';
  const spouce = person.sex === MALE ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age !== undefined && (
      <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${spouce}`
          : 'I am not married'}
      </p>
    </section>
  );
};
