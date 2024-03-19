export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let textMarried;

  if (isMarried) {
    if (sex === 'm') {
      textMarried = `My wife is ${partnerName}`;
    } else if (sex === 'f') {
      textMarried = `My husband is ${partnerName}`;
    } else {
      textMarried = `My partner is ${partnerName}`;
    }
  } else {
    textMarried = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{textMarried}</p>
    </section>
  );
};
