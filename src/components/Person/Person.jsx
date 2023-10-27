export const Person = ({ person }) => {
  const { name, age, partnerName, sex, isMarried } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const personAge = age === 0 ? null : age;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {personAge && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'
        }
      </p>
    </section>

  );
};
