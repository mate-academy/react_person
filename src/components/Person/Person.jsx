export const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;

  let info = '';

  if (isMarried) {
    info =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    info = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{info}</p>
    </section>
  );
};
