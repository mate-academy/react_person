export function Person({ person }) {
  const isMarriedMan = person.sex === 'm' && person.isMarried;
  const isMarriedWoman = person.sex === 'f' && person.isMarried;

  return (
    <div className="Person">
      <p className="Person__name">{person.name}</p>

      {person.age !== undefined && <p className="Person__age">{person.age}</p>}

      {isMarriedMan && (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      )}

      {isMarriedWoman && (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      )}

      {!person.isMarried && <p className="Person__partner">I am not married</p>}
    </div>
  );
}
