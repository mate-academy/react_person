export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;
  const textName = `My name is ${name}`;
  const textAge = age ? `I am ${age}` : '';
  let partnerText = '';

  if (isMarried === false) {
    partnerText = 'I am not married';
  } else {
    partnerText = sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{textName}</h2>
      {person.age && (
        <p className="Person__age">{textAge}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
