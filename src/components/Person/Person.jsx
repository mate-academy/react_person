import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let marriageMessage = 'I am not married';

  if (isMarried) {
    const husbandOrWife = sex === 'f' ? 'husband' : 'wife';

    marriageMessage = `${partnerName} is my ${husbandOrWife}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{marriageMessage}</p>
    </section>
  );
};
