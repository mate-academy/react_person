export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personIsMarried = `${partnerName} is my`;

  if (isMarried === true) {
    personIsMarried += sex === 'm' ? ' wife' : ' husband';
  } else {
    personIsMarried = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{`${personIsMarried}`}</p>
    </section>
  );
};
