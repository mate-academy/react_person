export const Person = ({ person }) => {
  const MAN = 'm';
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerMessage;

  if (isMarried) {
    if (sex === MAN) {
      partnerMessage = `${partnerName} is my wife`;
    } else {
      partnerMessage = `${partnerName} is my husband`;
    }
  } else {
    partnerMessage = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
