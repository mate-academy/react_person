import './Person.scss';

const FEMALE = 'f';

const notMarriedContent = 'I am not married';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerStatus = sex === FEMALE
    ? 'husband'
    : 'wife';

  const marriedStatusContent = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : notMarriedContent;

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
        {marriedStatusContent}
      </p>
    </section>
  );
};
