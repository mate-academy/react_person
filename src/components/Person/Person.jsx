// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  const { name, age, sex, isMarried } = person;
  const partner = sex === 'f' ? 'husband' : 'wife';
  const ageElement = age ? <p className="Person__age">{`I am ${age}`}</p> : '';
  const parterMessage = isMarried
    ? `${person.partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {ageElement}
      <p className="Person__partner">{parterMessage}</p>
    </section>
  );
};
