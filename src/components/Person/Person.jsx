/* eslint-disable react/jsx-pascal-case */

export const Person = ({ person }) => {
  let statusContent;
  let ageContent;

  if (person.age !== undefined) {
    ageContent = <p className="Person__age">I am {person.age}</p>;
  } else {
    ageContent = null;
  }

  if (person.isMarried) {
    if (person.sex === 'm') {
      statusContent = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    } else {
      statusContent = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    }
  } else {
    statusContent = <p className="Person__partner">I am not married</p>;
  }

  return (
    <>
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageContent}
      {statusContent}
    </>
  );
};
