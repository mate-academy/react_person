export function Person({ person }) {
  const { name, age = null, sex, isMarried, partnerName } = person;
  const hasAge = age != null;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const partnerBlock = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {partnerLabel}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {hasAge && <p className="Person__age">I am {age}</p>}
      {partnerBlock}
    </section>
  );
}
