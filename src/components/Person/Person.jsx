import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried, sex } = person;
  const personStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${personStatus}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
