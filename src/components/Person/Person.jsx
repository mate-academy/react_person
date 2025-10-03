export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (!isMarried) {
    partnerInfo = 'I am not married';
  } else if (sex === 'm') {
    partnerInfo = `${partnerName} is my wife`;
  } else if (sex === 'f') {
    partnerInfo = `${partnerName} is my husband`;
  }

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </div>
  );
}
