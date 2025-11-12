function getPartnerStatus(sex, isMarried, partnerName) {
  if (!isMarried) {
    return <p className="Person__partner">I am not married</p>;
  }

  return (
    <p className="Person__partner">
      {partnerName} is my{' '}
      {
        sex === 'm'
          ? 'wife'
          : 'husband'
      }
    </p>
  );
}

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {getPartnerStatus(sex, isMarried, partnerName)}
    </section>
  );
};
