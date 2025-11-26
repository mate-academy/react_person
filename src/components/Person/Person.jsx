export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerMessage;

  if (!isMarried) {
    partnerMessage = 'I am not married';
  } else if (sex === 'm') {
    partnerMessage = `${partnerName} is my wife`;
  } else if (sex === 'f') {
    partnerMessage = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age != null && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
