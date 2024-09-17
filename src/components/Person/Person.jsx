export const Person = people => {
  const { name, age, sex, isMarried, partnerName } = people.person;
  const personAge = age || '';
  const sexMarried = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age ? <p className="Person__age">{`I am ${personAge}`}</p> : ''}
      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${sexMarried}` : 'I am not married'}
      </p>
    </section>
  );
};
