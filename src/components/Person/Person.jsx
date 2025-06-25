export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {!!age && (<p className="Person__age">{`I am ${age}`}</p>)}
    <p className="Person__partner">
      {isMarried && sex === 'f' && (`${partnerName} is my husband`)}
      {isMarried && sex === 'm' && (`${partnerName} is my wife`)}
      {!isMarried && (`I am not married`)}
    </p>
  </section>
);
