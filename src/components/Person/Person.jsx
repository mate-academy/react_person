import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    partnerName,
    isMarried,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      {isMarried
        ? (
          <p className="Person__partner">
            {`${partnerName} is my ${sex === 'f'
              ? 'husband'
              : 'wife'}`}
          </p>
        )
        : (
          <p className="Person__partner">I am not married</p>
        )}
    </section>
  );
};
