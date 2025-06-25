import './Person.scss';

export const Person = ({ person }) => {
  const MALE_SEX = 'm';

  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = person;

  const personPartner = sex === MALE_SEX
    ? 'wife'
    : 'husband';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {Boolean(age) && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
        }

        <p className="Person__partner">
          {isMarried
            ? `${partnerName} is my ${personPartner}`
            : 'I am not married'
          }
        </p>
      </section>
    </>
  );
};
