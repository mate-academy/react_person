export function Person({ name, age, sex, isMarried, partnerName }) {
  const partnerMessage = isMarried
    ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
}
