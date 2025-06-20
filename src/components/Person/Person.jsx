export const Person = ({ person }) => {
  let hasPartner = <p className="Person__partner">I am not married</p>;

  if (person.sex === 'm' && person.isMarried) {
    hasPartner = (
      <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
    );
  }

  if (person.sex === 'f' && person.isMarried) {
    hasPartner = (
      <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      {hasPartner}
    </section>
  );
};
