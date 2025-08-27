export const Person = ({ person }) => {
  const ageAvailable = person.age && (
    <p className="Person__age">{`I am ${person.age}`}</p>
  );

  const partner = person.isMarried && (
    <p className="Person__partner">{`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {ageAvailable}
      {partner || <p className="Person__partner">I am not married</p>}
    </section>
  );
};
