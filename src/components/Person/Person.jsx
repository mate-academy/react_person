export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const FEMALE = 'f';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        <p className="Person__partner">
          {isMarried
            ? `${partnerName} is my ${sex === FEMALE ? 'husband' : 'wife'}`
            : `I am not married`}
        </p>
      </section>
    </>
  );
};

export default Person;
