export const Person = ({ person }) => {
  const partnerStatus = `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        <p className="Person__age">{person.age && `I am ${person.age}`}</p>
        <p className="Person__partner">
          {person.isMarried ? partnerStatus : 'I am not married'}
        </p>
      </section>
    </>
  );
};
