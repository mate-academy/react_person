export const Person = ({ person }) => (
  <div className="Person">
    <h1 className="Person__name">
      My
      name
      is
      {` `}
      {person.name}
    </h1>
    {person.age && (
    <p className="Person__age">
      I am
      {` `}
      {person.age}
    </p>
    )}
    <p className="Person__partner">
      {person.isMarried
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'
    }
    </p>
  </div>
);
