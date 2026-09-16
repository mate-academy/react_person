export const Person = ({ person }) => {
  const { name, sex, isMarried, age, partnerName } = person;

  const ageParagraph = age && <p className="Person__age">I am {age}</p>;
  let partnerText = 'I am not married';

  if (isMarried) {
    partnerText =
      sex === 'f'
        ? `${partnerName} is my husband`
        : `${partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageParagraph}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
