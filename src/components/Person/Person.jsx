import './Person.scss';

export const Person = ({ person }) => {
  const hasHusband = person.isMarried === true && person.sex === 'f';
  const hasWife = person.isMarried === true && person.sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}

      {hasWife && (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      )}

      {hasHusband && (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      )}

      {person.isMarried === false && (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
