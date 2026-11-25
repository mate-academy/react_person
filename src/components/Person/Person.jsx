export function Person({ person }) {
  return (
    <div className="Person">
      <p className="Person__name">{person.name}</p>
      {person.age !== undefined && <p className="Person__age">{person.age}</p>}
      {person.sex === 'm' && person.isMarried && (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      )}
      {person.sex === 'w' && person.isMarried && (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      )}
      {!person.isMarried && <p className="Person__partner">I am not married</p>}
    </div>
  );
}
