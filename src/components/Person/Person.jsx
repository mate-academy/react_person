export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  let partnerStatus = 'I am not married';

  if (isMarried) {
    if (sex === 'f') {
      partnerStatus = `${partnerName} is my husband`;
    } else {
      partnerStatus = `${partnerName} is my wife`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
