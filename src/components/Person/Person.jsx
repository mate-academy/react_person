export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;
  const partnerStatus = sex === 'm' ? 'wife' : 'husband';
  const isMarriedMessage = `${partnerName} is my ${partnerStatus}`;
  const isNotMarriedMessage = 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {!!age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? isMarriedMessage
          : isNotMarriedMessage
        }
      </p>
    </section>
  );
};
