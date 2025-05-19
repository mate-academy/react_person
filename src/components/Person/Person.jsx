export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">{person.name}</h2>
    {person.age !== undefined && (
      <p className="Person__age">Age: {person.age}</p>
    )}
    <p className="Person__partner">
      {person.isMarried
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </div>
);
