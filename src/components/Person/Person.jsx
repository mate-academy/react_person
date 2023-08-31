export const Person = ({ person }) => {
  const getMarriageStatus = () => {
    if (!person.isMarried) {
      return 'I am not married';
    }

    if (person.sex === 'f' && person.isMarried) {
      return `${person.partnerName} is my husband`;
    }

    return `${person.partnerName} is my wife`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">{getMarriageStatus()}</p>
    </section>
  );
};
