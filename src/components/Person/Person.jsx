export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let marriedStatus = 'I am not married';

  if (isMarried) {
    marriedStatus = sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">
      <h1 className="Person__name">{`My name is ${name}`}</h1>
      {age !== undefined && (
        <span className="Person__age">{`I am ${age}`}</span>
      )}
      <p className="Person__partner">{`${partnerName} is my ${marriedStatus}`}</p>
    </section>
  );
};
