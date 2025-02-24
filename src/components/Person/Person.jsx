export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let defineMarried = 'I am not married';

  if (isMarried) {
    if (sex === 'm') {
      defineMarried = `${partnerName} is my wife`;
    } else {
      defineMarried = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{defineMarried}</p>
    </section>
  );
};
