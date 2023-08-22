export const Person = ({ person }) => {
  let content;

  if (!person.isMarried) {
    content = <p className="Person__partner">`I am not married`</p>;
  } else if (person.sex === 'm') {
    content = <p className="Person__partner">{`${person.partnerName} is my wife`}</p>;
  } else {
    content = <p className="Person__partner">{`${person.partnerName} is my husband`}</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age === undefined
        ? null
        : <p className="Person__age">{`I am ${person.age}`}</p> }
      {content}
      {/* {person.isMarried
        ? person.sex === 'f'
          ? <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
          : <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
        : <p className="Person__partner">`I am not married`</p>} */}

    </section>
  );
};
