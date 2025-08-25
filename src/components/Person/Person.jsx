// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerMessage = '';

  if (isMarried) {
    if (sex === 'm') {
      partnerMessage = (
        <p className="Person__partner">{partnerName} is my wife</p>
      );
    } else if (sex === 'f') {
      partnerMessage = (
        <p className="Person__partner">{partnerName} is my husband</p>
      );
    }
  } else {
    partnerMessage = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {partnerMessage}
    </section>
  );
};
