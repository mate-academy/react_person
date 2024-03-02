export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  let status = 'I am not married';

  if (isMarried) {
    if (sex === 'm') {
      status = `${partnerName} is my wife`;
    } else {
      status = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
