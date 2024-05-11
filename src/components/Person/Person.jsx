export const Person = ({ person }) => {
  let isMarriedMessage = '';
  const { name, age, sex, isMarried, partnerName } = person;

  if (isMarried && sex === 'm') {
    isMarriedMessage = `${partnerName} is my wife`;
  } else if (isMarried && sex === 'f') {
    isMarriedMessage = `${partnerName} is my husband`;
  } else {
    isMarriedMessage = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age ? <p className="Person__age">I am {age}</p> : ''}
      <p className="Person__partner">{isMarriedMessage}</p>
    </section>
  );
};
