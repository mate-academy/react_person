export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerLabel = 'I am not married';

  if (isMarried && sex === 'm') {
    partnerLabel = `${partnerName} is my wife`;
  } else if (isMarried && sex === 'f') {
    partnerLabel = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
