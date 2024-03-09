export const Person = ({ person }) => {
  const onlyWithSex =
    person.sex === 'f'
      ? `${person.partnerName} is my husband`
      : `${person.partnerName} is my wife`;

  return (
    <section className="Person">
      <>
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>

        {person.age && person.age !== 0 && (
          <p className="Person__Age">{`I am ${person.age}`}</p>
        )}

        <p className="Person__partner">
          {person.isMarried ? onlyWithSex : 'I am not married'}
        </p>
      </>
    </section>
  );
};
