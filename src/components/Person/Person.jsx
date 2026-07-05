export const Person = ({ person }) => {
  const isMarriedMan = person.isMarried && person.sex === 'm';
  const isMarriedWoman = person.isMarried && person.sex === 'f';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      {isMarriedMan && (
        <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
      )}
      {isMarriedWoman && (
        <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
      )}
      {!person.isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
