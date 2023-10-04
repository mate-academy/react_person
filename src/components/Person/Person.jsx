export const Person = ({ person }) => {
  const { age, isMarried, name, partnerName, sex } = person;
  const personPartner = sex === 'm' ? 'wife' : 'husband';
  const personPartnerText = isMarried ? `${partnerName} is my ${personPartner}` : 'I am not married';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}
        <p className="Person__partner">{personPartnerText}</p>
      </section>
    </div>
  );
};
