export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personpartnerName;

  if (!isMarried || !partnerName) {
    personpartnerName = 'I am not married';
  } else if (sex === 'm') {
    personpartnerName = `${partnerName} is my wife`;
  } else if (sex === 'f') {
    personpartnerName = `${partnerName} is my husband`;
  } else {
    personpartnerName = partnerName;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{personpartnerName}</p>
    </section>
  );
};
