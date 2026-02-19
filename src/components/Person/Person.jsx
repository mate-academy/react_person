export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerText = 'I am not married';

  if (isMarried) {
    partnerText =
      sex === 'm' ? `My wife: ${partnerName}` : `My husband: ${partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
