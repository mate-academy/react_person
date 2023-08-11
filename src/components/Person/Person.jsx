export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let personAge = null;
  let partner = 'I am not married';

  if (age) {
    personAge = `I am ${age}`;
  }

  if (isMarried) {
    if (sex === 'm') {
      partner = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      partner = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {personAge && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
