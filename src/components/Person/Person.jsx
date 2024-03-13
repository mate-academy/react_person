// export const Person = ({ person }) => ();
export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let partnerStatus;

  if (isMarried) {
    partnerStatus =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && age !== 0 && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
