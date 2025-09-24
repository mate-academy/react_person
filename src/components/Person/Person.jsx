// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  if (!person) return null;

  const hasAge = person.age !== undefined;
  const partnerLabel = person.sex === 'm'
  ? 'wife'
  : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${person.age}`}</p>}
      {person.isMarried && (
        <p className="Person__partner">
          {`${person.partnerName} is my ${partnerLabel}`}
        </p>
      )}
      {!person.isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
