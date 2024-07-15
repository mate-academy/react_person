export const Person = ({ person }) => {
  const pertnerSex = person.sex === 'f' ? 'husband' : 'wife';
  let married = null;

  if (person.isMarried) {
    married = `${person.partnerName} is my ${pertnerSex}`;
  } else {
    married = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
