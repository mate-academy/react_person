export const Person = ({ person }) => {
  const maritalStatus = () => {
    let status = '';

    if (!person.isMarried) {
      status = 'I am not married';
    } else if (person.sex === 'f') {
      status = `${person.partnerName} is my husband`;
    } else {
      status = `${person.partnerName} is my wife`;
    }

    return status;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      { person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
      )}
      <p className="Person__partner">
        {maritalStatus()}
      </p>
    </section>
  );
};
