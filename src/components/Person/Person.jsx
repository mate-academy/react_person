import './Person.scss';

export const Person = ({ person }) => {
  const setParthner = person.sex === 'm'
    ? 'is my wife'
    : 'is my husband';
  const hasParthner = person.isMarried
    ? `${person.partnerName} ${setParthner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {person.name}
      </h2>
      {person.age && (
        <p className="Person__age">
          {'I am '}
          {person.age}
        </p>
      )}
      <p className="Person__partner">{hasParthner}</p>
    </section>
  );
};
