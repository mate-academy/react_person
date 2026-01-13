export const Person = ({ person }) => {
  // lógica para parceiro(a)
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerText = 'I am not married';

  if (isMarried) {
    partnerText = sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && (
        <p className="Person__age">I am {age}</p>
      )}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
