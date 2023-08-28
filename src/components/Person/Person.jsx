export const Person = ({ person }) => {
  const getMarriedLabel = () => {
    if (!person.isMarried) {
      return 'I am not married';
    }

    if (person.isMarried && person.sex === 'm') {
      return `${person.partnerName} is my wife`;
    }

    return `${person.partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {getMarriedLabel()}
      </p>
    </section>
  );
};
