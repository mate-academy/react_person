export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let partnerInfo;

  if (!isMarried) {
    partnerInfo = 'I am not married';
  } else if (sex === 'm') {
    partnerInfo = `${partnerName} is my wife`;
  } else {
    partnerInfo = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
