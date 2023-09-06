import './Person.scss';

export const Person = ({ person }) => {
  const {
    age,
    isMarried,
    partnerName,
  } = person;
  const partnerStatus = person.sex === 'm' ? 'wife' : 'husbend';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};
