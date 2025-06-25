export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerRelation = sex === 'f' ? 'husband' : 'wife';
  const marriedMessage = isMarried
    ? `${partnerName} is my ${partnerRelation}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{marriedMessage}</p>
    </section>
  );
};
