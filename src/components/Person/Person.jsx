export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerStatus = sex === 'f' ? 'husband' : 'wife';
  const PartnerDescription = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{PartnerDescription}</p>
    </section>
  );
};
