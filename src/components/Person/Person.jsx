import './Person.scss';

const FEMALE_SEX = 'f';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const checkPersonPartner = sex === FEMALE_SEX
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }
      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${checkPersonPartner}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
