export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const partnerSex =
    sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {person.age ? <p className="Person__age">I am {age}</p> : null}
      <p className="Person__partner">
        {isMarried ? partnerSex : 'I am not married'}
      </p>
    </section>
  );
};
