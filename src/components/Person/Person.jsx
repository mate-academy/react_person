// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
   const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  let message = null;

  if (!isMarried) {
  message = 'I am not married';
  } else if (sex === 'm') {
  message = `${partnerName} is my wife`;
  } else {
  message = `${partnerName} is my husband`;
  }

  return (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age && (
      <p className="Person__age">
        I am {age}
      </p>
    )}
    <p className="Person__partner">{message}</p>
  </section>
);
};