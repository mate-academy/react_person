export const Person = ({ person }) => {
  const hasAge = person.age !== undefined;
  const { isMarried } = person;
  const partnerRole = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {hasAge && <p className="Person__age">{`I am ${person.age}`}</p>}

      {isMarried && (
        <p className="Person__partner">
          {`${person.partnerName} is my ${partnerRole}`}
        </p>
      )}

      {!isMarried && <p className="Person__partner">I am not married</p>}
    </div>
  );
};
