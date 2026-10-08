const Married = ({ sex, isMarried, partnerName }) => {
  if (isMarried === true) {
    const refer = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${refer}`;
  }

  return 'I am not married';
};

export const Person = ({ person }) => {
  const { name, age = 0, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== 0 && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        <Married sex={sex} isMarried={isMarried} partnerName={partnerName} />
      </p>
    </section>
  );
};
