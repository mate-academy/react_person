export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried = false, sex } = person;
  const spouseBySex = { m: 'wife', f: 'husband' };
  const spouse = spouseBySex[sex] ?? 'spouse';

  const partnerText = isMarried
    ? `${partnerName} is my ${spouse}`
    : 'I am not married';
  const hasAge = age != null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {hasAge && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
