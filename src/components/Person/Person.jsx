export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  const ageParagraph = age ? <p className="Person__age">I am {age}</p> : null;
  const partnerParagraph = (
    <p className="Person__partner">
      {isMarried && partnerName
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageParagraph}
      {partnerParagraph}
    </section>
  );
}
