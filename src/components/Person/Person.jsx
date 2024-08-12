export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let marriedStatus = 'I am not married';
  const spouse = sex === 'f' ? 'husband' : 'wife';

  if (isMarried) {
    marriedStatus = `${partnerName} is my ${spouse}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{marriedStatus}</p>
    </section>
  );
};
