// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner;
  const isMarriedMan = isMarried && sex === 'm';
  const isMarriedWoman = isMarried && sex === 'f';

  if (isMarriedMan) {
    partner = `${partnerName} is my wife`;
  } else if (isMarriedWoman) {
    partner = `${partnerName} is my husband`;
  } else {
    partner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
