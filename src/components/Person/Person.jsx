export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let statusText = '';
  const gender = sex === 'm' ? 'wife' : 'husband';

  if (!isMarried) {
    statusText = 'I am not married';
  } else {
    statusText = `${partnerName} is my ${gender}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{statusText}</p>
    </section>
  );
};
