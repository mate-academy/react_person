// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  // Determine partner relationship text
  let partnerText = '';
  if (isMarried) {
    if (sex === 'm') {
      partnerText = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      partnerText = `${partnerName} is my husband`;
    }
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
