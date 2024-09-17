export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  const { name, age, isMarried } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${person.partnerName} is my ${partner}`
          : 'I am not married'}
      </p>
    </section>
  );
};
