export const Person = ({ person }) => {
  const partnerType = person.sex === 'f'
    ? 'husband'
    : 'wife';

  return (
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
        {person.isMarried
          ? `${person.partnerName} is my ${partnerType}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
