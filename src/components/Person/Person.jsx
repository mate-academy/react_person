const getParterInfo = (sex, partnerName) => {
  if (sex === 'm') {
    return `${partnerName} is my wife`;
  }

  return `${partnerName} is my husband`;
};

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {person.isMarried
          ? getParterInfo(person.sex, person.partnerName)
          : 'I am not married'}
      </p>
    </section>
  );
};
