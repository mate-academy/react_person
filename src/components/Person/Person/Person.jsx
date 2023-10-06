export const Person = ({
  person: {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  },
}) => {
  let partnerMessage = 'I am not married';

  if (isMarried) {
    partnerMessage = `${partnerName} is my ${sex === 'f'
      ? 'husband'
      : 'wife'}`;
  }

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

      <p className="Person__partner">
        {partnerMessage}
      </p>
    </section>
  );
};
