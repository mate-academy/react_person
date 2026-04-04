export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
    const isMarriedWoman = isMarried === true && sex === 'f'
    ? <p className="Person__partner">{partnerName} is my husband</p>
    : <p className="Person__partner">{partnerName} is my wife</p>
    || <p className="Person__partner">I am not married</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age === undefined 
      ? null 
      : <p className="Person__age">I am {age}</p>}
      {isMarriedWoman}
    </section>
  );
};
