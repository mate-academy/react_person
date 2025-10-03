function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (!isMarried) {
    partnerInfo = 'I am not married';
  } else if (sex === 'male') {
    partnerInfo = `My wife’s name is ${partnerName}`;
  } else {
    partnerInfo = `My husband’s name is ${partnerName}`;
  }

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>

      {age && <p className="Person__age">I am {age} years old</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </div>
  );
}

export default Person;
