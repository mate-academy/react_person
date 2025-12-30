export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  function hasPartner() {
    if (sex === 'm') {
      return 'wife';
    }

    return 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${hasPartner()}`
          : 'I am not married'}
      </p>
    </section>
  );
};
