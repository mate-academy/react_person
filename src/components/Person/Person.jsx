export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
      {age > 0 && (
    <p className="Person__age">
        {`I am ${age}`}
    </p>
      )}
    <p className="Person__partner">
      {isMarried
        ? (`${partnerName} is my ${sex === 'm' ? ' wife' : ' husband'}`)
          : 'I am not married'}
    </p>
  </section>
);
