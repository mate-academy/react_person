export function Person({ person }) {
  const { name, age, isMarried, sex, partnerName } = person;

  const partnerRole = sex === 'm' ? 'wife' : 'husband';
  const partnerInfo = !isMarried
    ? 'I am not married'
    : `${partnerName} is my ${partnerRole}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
}
