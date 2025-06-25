export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const ageLabel = age ? <p className="Person__age">I am {age}</p> : '';
  let partnerLabel = <p className="Person__partner">I am not married</p>;

  if (isMarried) {
    partnerLabel = (
      <p className="Person__partner">
        {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageLabel}
      {partnerLabel}
    </section>
  );
};
