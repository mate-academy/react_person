export const Person = ({ person }) => {
  const { name, sex, age = null, isMarried, partnerName } = person;
  let partner = 'wife';

  if (sex === 'f') {
    partner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== null && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried === true
          ? `${partnerName} is my ${partner}`
          : `I am not married`}
      </p>
    </section>
  );
};
