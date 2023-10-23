export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person || {};

  let partnerStatus = '';

  if (isMarried) {
    if (sex === 'm') {
      partnerStatus = `${partnerName} is my wife`;
    } else {
      partnerStatus = `${partnerName} is my husband`;
    }
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
