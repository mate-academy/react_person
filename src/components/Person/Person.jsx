export const Person = ({ person }) => {
  const parther = person.sex === 'm' ? 'wife' : 'husband';
  const familyStatus = !person.isMarried ? 'I am not married' : `${person.partnerName} is my ${parther}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {familyStatus}
      </p>
    </section>
  );
};
