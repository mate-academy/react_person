export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      {name && (
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
      )}
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried && (
          <>
            {sex === 'm'
              ? `${partnerName} is my ${partner}`
              : `${partnerName} is my ${partner}`
            }
          </>
        )}
        {!isMarried && (
          'I am not married'
        )}
      </p>
    </section>
  );
};
