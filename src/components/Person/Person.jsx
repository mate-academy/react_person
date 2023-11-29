
const Person = ({ person: { name, age, sex, isMarried, partnerName } }) => {
  const marriage = () => {
    if (isMarried) {
      if (sex === 'm') {
        return `${partnerName} is my wife`;
      }

      return `${partnerName} is my husband`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{marriage()}</p>
    </section>
  );
};

export default Person;
