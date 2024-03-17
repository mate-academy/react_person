export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const marriedText = isMarried
    ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
    : 'I am not married';

  const ageText = age && `I am ${age}`;
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age">{ageText}</p>
      <p className="Person__partner">{marriedText}</p>
    </section>
  );
};
