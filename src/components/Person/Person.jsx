export const Person = ({ person }) => {
  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = person;
  const MALE = 'm';
  const WIFE = 'wife';
  const HUSBAND = 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        { `My name is ${name}` }
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === MALE ? WIFE : HUSBAND}`
          : `I am not married`
        }
      </p>
    </section>
  );
};
