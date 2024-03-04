export const Person = ({ person }) => {
  const getInfoAboutPartner = (sex, partnerName) => {
    if (sex === 'f') {
      return `${partnerName} is my husband`;
    }

    return `${partnerName} is my wife`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {person.isMarried
          ? getInfoAboutPartner(person.sex, person.partnerName)
          : 'I am not married'}
      </p>
    </section>
  );
};
