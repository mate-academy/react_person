function getMaritalStatus(people) {
  if (!people.isMarried) {
    return `I am not married`;
  }

  const partner = people.sex === 'f' ? 'husband' : 'wife';

  return `${people.partnerName} is my ${partner}`;
}

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {!!person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{getMaritalStatus(person)}</p>
    </section>
  );
};
