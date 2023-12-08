export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const husbandWife = `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;
  const spouse = isMarried ? husbandWife : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      { !!age
      && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">{spouse}</p>
    </section>
  );
};
