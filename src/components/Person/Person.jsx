export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isFemale = sex === 'f';
  const isMale = sex === 'm';
  const marriedFemale = isFemale && isMarried;
  const marriedMale = isMale && isMarried;

  let nameOfPartner;

  if (marriedFemale || marriedMale) {
    nameOfPartner = isMale ? 'wife' : 'husband';
  } else {
    nameOfPartner = 'not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${nameOfPartner}`
          : 'I am not married'}
      </p>
    </section>
  );
};

export default Person;
