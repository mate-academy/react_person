import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const FEMALE = 'f';
  const notMarried = 'I am not married';

  const partner = sex === FEMALE ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        person.age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )
      }

      {
        isMarried
          ? (
            <p className="Person__partner">
              {`${partnerName} is my ${partner}`}
            </p>
          )
          : (
            <p className="Person__partner">
              {notMarried}
            </p>
          )
      }
    </section>
  );
};
