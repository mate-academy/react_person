export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerAge = age && <p className="Person__age">I am {age}</p>;

  const partnerType = sex === 'm' ? 'wife' : 'husband';

  const partnerText = (
    <p className="Person__partner">
      {isMarried ? `${partnerName} is my ${partnerType}` : 'I am not married'}
    </p>
  );

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {partnerAge}
        {partnerText}
      </section>
    </div>
  );
};
