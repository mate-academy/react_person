export const Person = ({ person }) => {
  const { isMarried } = person;
  const isFemale = person.sex === 'f';
  const isMale = person.sex === 'm';
  const { partnerName } = person;

  let message;

  if (isMarried) {
    if (isFemale) {
      message = `${partnerName} is my husband`;
    } else if (isMale) {
      message = `${partnerName} is my wife`;
    }
  } else {
    message = 'I am not married';
  }

  return (
    <section className="Person">
      {person.name && (
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
      )}

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {message}
      </p>
    </section>
  );
};
