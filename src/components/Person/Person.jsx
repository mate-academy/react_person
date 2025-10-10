export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let personStatus;

  if (isMarried) {
    switch (sex) {
      case 'm':
        personStatus = `${partnerName} is my wife`;
        break;

      case 'f':
        personStatus = `${partnerName} is my husband`;
        break;
    }
  } else {
    personStatus = 'I am not married';
  }

  personStatus = <p className="Person__partner">{personStatus}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age ? <p className="Person__age">I am {age}</p> : null}

      {personStatus}
    </section>
  );
};
