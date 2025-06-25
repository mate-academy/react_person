export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const whoIsPartner = sex === 'm' ? 'wife' : 'husband';
  const isFamily = isMarried ? `${partnerName} is my ${whoIsPartner}` : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      { age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">
        {isFamily}
      </p>
    </section>
  );
};
