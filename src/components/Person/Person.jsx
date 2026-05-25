export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isFemale = sex === 'f';

  const maritalStatus = isMarried
    ? `${partnerName} is my ${isFemale ? 'husband' : 'wife'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};
