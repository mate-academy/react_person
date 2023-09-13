export const Person = ({ 
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    {age && (
    <p className="Person__age">
      I am
      {' '}
      {age}
    </p>
    )}
    <p className="Person__partner">
      {!isMarried && 'I am not married'}
      {sex === 'f' && `${partnerName} is my husband`}
      {sex === 'm' && `${partnerName} is my wife`}
    </p>
  </section>
);
