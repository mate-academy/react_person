export const Person = (props) => {
  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = props.person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      {isMarried ? (
        <p className="Person__partner">
          {`${partnerName} is my ${partner}`}
        </p>
      ) : (
        <>I am not married</>
      )}
    </section>

  );
};
