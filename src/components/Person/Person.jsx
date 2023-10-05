export const Person = ({ person }) => {
  const { name, age, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age ? `I am ${age}` : ''}
      </p>

      <p className="Person__partner">
        {!partnerName
          ? `I am not married`
          : `${partnerName} is my ${sex === 'm'
            ? 'wife'
            : 'husband'}`
        }
      </p>
    </section>
  );
};
