export const Person = ({ person }) => {
  const getPartnerStatus = () => {
    if (person.isMarried && person.sex === 'm') {
      return `${person.partnerName} is my wife`;
    }

    if (person.isMarried && person.sex === 'f') {
      return `${person.partnerName} is my husband`;
    }

    if (!person.isMarried) {
      return 'I am not married';
    }

    return null;
  };

  return (
    <div>
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        {person.age !== undefined && (
          <p className="Person__age">I am {person.age}</p>
        )}
        <p className="Person__partner">{getPartnerStatus()}</p>
      </section>
    </div>
  );
};
