// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let maleFemale = '';

  if (sex === 'm') {
    maleFemale = 'wife';
  } else {
    maleFemale = 'husband';
  }

  let marriageStatus = '';

  if (isMarried) {
    marriageStatus = (
      <p className="Person__partner">{`${partnerName} is my ${maleFemale}`}</p>
    );
  } else {
    marriageStatus = <p className="Person__partner">I am not married</p>;
  }

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {marriageStatus}
    </div>
  );
};
