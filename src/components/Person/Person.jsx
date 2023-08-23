import './Person.scss';

export const Person = ({ person }) => {
  const { sex, isMarried, partnerName, name, age } = person;

  const spouseGender = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriageInformation = isMarried
    ? `${partnerName} is my ${spouseGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {marriageInformation}
      </p>
    </section>
  );
};
