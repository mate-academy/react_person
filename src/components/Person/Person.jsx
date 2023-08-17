export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  function marriedPerson(marriedStatus) {
    if (!marriedStatus) {
      return 'I am not married';
    }

    const partnerGender = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerGender}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age ? (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      ) : ''}
      <p className="Person__partner">
        {marriedPerson(isMarried)}
      </p>
    </section>
  );
};
