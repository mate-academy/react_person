export const Person = ({ person }) => {
  let partnerName = 'I am not married';

  if (person.isMarried) {
    partnerName = `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`;
  }

  const Age = () => {
    const { age } = person;

    if (age) {
      return <p className="Person__age">I am {person.age}</p>;
    }

    return null;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <Age />
      <p className="Person__partner">{partnerName}</p>
    </section>
  );
};
