function getPartnerInfo(person) {
  if (person.isMarried === false) {
    return <span>I am not married</span>;
  }

  if (person.sex === 'm') {
    return <span>{person.partnerName} is my wife</span>;
  }

  return <span>{person.partnerName} is my husband</span>;
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age > 0 && (
      <p className="Person__age">
        <span>I am {person.age}</span>
      </p>
    )}
    <p className="Person__partner">{getPartnerInfo(person)}</p>
  </section>
);
