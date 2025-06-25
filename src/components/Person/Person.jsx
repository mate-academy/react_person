export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let partnerInfo = '';
  const MALE = 'm';

  if (isMarried) {
    partnerInfo =
      sex === MALE
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
