export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText;

  if (isMarried) {
    if (sex === 'm') {
      partnerText = `${partnerName} is my wife`;
    } else {
      partnerText = `${partnerName} is my husband`;
    }
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age">
        {person.age ? `I am ${age}` : 'I am ageless'}
      </p>
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
