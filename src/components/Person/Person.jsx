export function Person({ person }) {
  const { name, age = 0, sex, isMarried, partnerName } = person;
  const partnerGender = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== 0 && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${partnerGender}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
