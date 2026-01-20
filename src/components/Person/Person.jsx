export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const marriedPerson = sex === 'm' ? 'wife' : 'husband';
  const married = (
    <p className="Person__partner">
      {isMarried ? `${partnerName} is my ${marriedPerson}` : `I am not married`}
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {married}
    </section>
  );
};
