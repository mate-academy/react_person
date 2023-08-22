export const Person = ({ person }) => {
  let content;

  if (person.isMarried && person.sex === 'm') {
    content = `${person.partnerName} is my wife`;
  } else if (person.isMarried && person.sex === 'f') {
    content = `${person.partnerName} is my husband`;
  } else {
    content = `I am not married`;
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        {person.age ? (
          <p className="Person__age">
            {`I am ${person.age}`}
          </p>
        ) : (<p />)
        }
        <p className="Person__partner">
          {content}
        </p>
      </section>
    </>
  );
};
