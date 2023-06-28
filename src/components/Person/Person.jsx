export const Person = ({ person }) => {
  const partner = person.sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age
        && (<p className="Person__age">{`I am ${person.age}`}</p>)}

      <p className="Person__partner">
        {!person.isMarried
          ? 'Im not married'
          : `${person.partnerName} is my ${partner}`}
      </p>
    </section>
  );
};
