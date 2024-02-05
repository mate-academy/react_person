// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  function getPersonStatus(args) {
    let content = '';

    if (person.sex === 'm' && person.isMarried) {
      content += `${person.partnerName} is my wife`;
    } else if (person.sex === 'f' && person.isMarried) {
      content += `${person.partnerName} is my husband`;
    } else {
      content += "I'm not married";
    }

    return content;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
      )}
      <p className="Person__partner">
        {getPersonStatus(person)}
      </p>
    </section>
  );
};
