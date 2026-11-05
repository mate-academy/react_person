export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age && <p className="Person__age">{person.age}</p>}
      <p className="Person__partner">
        {person.isMarried
          ? `${partner} is ${person.partnerName}`
          : 'I am not married'}
      </p>
    </div>
  );
};
