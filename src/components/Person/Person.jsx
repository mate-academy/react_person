import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${
            sex === 'f'
              ? 'husband'
              : 'wife'}`

          : `i am not married`
        }
      </p>
    </section>
  );
};
