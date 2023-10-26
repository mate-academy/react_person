export const Person = ({ person }) => {
  const partnerSex = person.sex === "m" ? "wife" : "husband";

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </p>

      {/* {person.sex === 'm' && person.isMarried ? `${person.partnerName} is my wife`
      ? person.sex === 'f' && person.isMarried ? `${person.partnerName} is my husband`
        : 'I am not married'}

      {(person.sex === 'm' && person.isMarried) && `${person.partnerName} is my wife`}
      {(person.sex === 'f' && person.isMarried) && `${person.partnerName} is my husband`}
      {!person.isMarried && 'I am not married'} */}
    </section>
  );
};
