export const Person = ({ person }) => {
  const renderPartner = () => {
    if (person.isMarried) {
      if (person.sex === 'm') {
        return <p>{person.partnerName} is my wife</p>;
      }

      if (person.sex === 'f') {
        return <p>{person.partnerName} is my husband</p>;
      }
    }

    return <p>I am not married</p>;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && (
        <div className="Person__age">
          <p>I am {person.age}</p>
        </div>
      )}
      <div className="Person__partner">{renderPartner()}</div>
    </section>
  );
};

export default Person;
