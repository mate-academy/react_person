export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  let partnerLabel = 'I am not married';

  if (isMarried) {
    if (sex === 'm') {
      partnerLabel = `${partnerName} is my wife`;
    } else {
      partnerLabel = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {partnerLabel && (
        <p className="Person__partner">{partnerLabel}</p>
      )}
    </section>
  );
}
