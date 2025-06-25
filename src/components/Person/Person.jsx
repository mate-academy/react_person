import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  const NOT_MARRIED_MESSAGE = 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )
      }

      <p className="Person__partner">
        {!isMarried
          ? `${NOT_MARRIED_MESSAGE}`
          : `${partnerName} is my ${partnerSex}`
        }
      </p>
    </section>
  );
};
