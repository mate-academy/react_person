export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let marriedStatus = '';

  if (isMarried) {
    marriedStatus =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    marriedStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h1 className="Person__name">{`My name is ${name}`}</h1>
      {age !== undefined && (
        <span className="Person__age">{`I am ${age}`}</span>
      )}
      <p className="Person__partner">{marriedStatus}</p>
    </section>
  );
};
