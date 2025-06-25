import './Person.scss';

export const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="person__age">{`I am ${age}`}</p>
      )}

      <p className="person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : `I am not married`
        }
      </p>
    </section>
  );
};
