export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerText;
  let partnerStatement;

  if (sex === 'f') {
    partnerText = 'husband';
  } else {
    partnerText = 'wife';
  }

  if (!isMarried) {
    partnerStatement = 'I am not married';
  } else {
    partnerStatement = `${partnerName} is my ${partnerText}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerStatement}</p>
    </section>
  );
};
