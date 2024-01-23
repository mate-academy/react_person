export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let messege = '';

  if (!isMarried) {
    messege = `I am not married`;
  } else {
    messege = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age === undefined
        ? ''
        : <p className="Person__age">{`I am ${age}`}</p>
      }
      <p className="Person__partner">{messege}</p>
    </section>
  );
};
