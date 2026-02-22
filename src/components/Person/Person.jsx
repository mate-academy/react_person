export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personpartnerName;

  if (!isMarried || !partnerName) {
    personpartnerName = 'I am not isMarried';
  } else if (sex === 'male') {
    personpartnerName = `wife: ${partnerName}`;
  } else if (sex === 'female') {
    personpartnerName = `husband: ${partnerName}`;
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
