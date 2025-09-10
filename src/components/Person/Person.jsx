export const Person = ({ person }) => {
  const { name, partnerName, sex, isMarried } = person;
  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person?.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${partnerRole}`}
      </p>
    </section>
  );
};
