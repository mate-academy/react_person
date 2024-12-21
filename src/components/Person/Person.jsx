// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, partnerName, sex, isMarried } = person;

  const personSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section>
      <h2> My name is {name} </h2>
      <p>{age ? `I am ${age}` : ''}</p>
      <p>
        {isMarried === true
          ? `${partnerName} is my ${personSex}`
          : `I am not married`}
      </p>
    </section>
  );
};
