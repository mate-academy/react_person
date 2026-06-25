const getMariedStatus = person => {
  if (person.sex === 'm' && person.isMarried) {
    return `${person.partnerName} is my wife`;
  }

  if (person.sex === 'f' && person.isMarried) {
    return `${person.partnerName} is my husband`;
  }

  return 'I am not married';
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">{getMariedStatus(person)}</p>
  </section>
);
