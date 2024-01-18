export const Person = ({ person }) => {
  const { isMarried, partnerName, sex, name, age } = person;
  const partnerSex = sex === 'm' ? 'wife' : 'husband';
  const partnerState = isMarried
    ? `${partnerName} is my ${partnerSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerState}</p>
    </section>
  );
};
