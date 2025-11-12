export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let isItMarried;

  if (isMarried === true) {
    if (sex === 'f') {
      isItMarried = `${partnerName} is my husband`;
    } else {
      isItMarried = `${partnerName} is my wife`;
    }
  } else {
    isItMarried = 'I am not married';
  }

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && (
        <h2 className="Person__age">
          <span>I am {age}</span>
        </h2>
      )}

      <h2 className="Person__partner">{isItMarried}</h2>
    </div>
  );
};
