import './Person.scss';

export const Person = ({ person }) => {
  const {
    sex,
    age,
    name,
    isMarried,
    partnerName,
  } = person;

  const partnerDesignation = sex === 'm'
    ? 'wife'
    : 'husband';

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
        {isMarried
          ? `${partnerName} is my ${partnerDesignation}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
