import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const FEMALE = 'f';
  let content = 'I am not married';

  const partnerStatus = sex === FEMALE
    ? 'husband'
    : 'wife';

  if (isMarried) {
    content = `${partnerName} is my ${partnerStatus}`;
  }

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
        {content}
      </p>
    </section>
  );
};
