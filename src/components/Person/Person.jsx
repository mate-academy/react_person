export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const personPartnerText = isMarried ? `${partnerName} is my ${partner}` : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {person.age && (
      <p className="Person__age">
        <span>{`I am ${age}`}</span>
      </p>
      )}
      <p className="Person__partner">
        {personPartnerText}
      </p>
    </section>
  );
};
