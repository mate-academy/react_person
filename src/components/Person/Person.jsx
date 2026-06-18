export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age && <p className="Person__age">{`My age is ${person.age}`}</p>}

    {person.isMarried && (
      <p className="Person__partner">
        {`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
      </p>
    )}
  </div>
);
