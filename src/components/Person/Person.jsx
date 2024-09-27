import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const genderMessage = sex === 'm' ? 'wife' : 'husband';

  const isMarriedMessage = isMarried
    ? `${partnerName} is my ${genderMessage}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{isMarriedMessage}</p>
    </section>
  );
};
