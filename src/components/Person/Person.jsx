function getPartnerLabel(sex, isMarried, partnerName) {
  if (!isMarried) {
    return 'I am not married';
  }

  return sex === 'f'
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;
}

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}
    <p className="Person__partner">
      {getPartnerLabel(sex, isMarried, partnerName)}
    </p>
  </section>
);
