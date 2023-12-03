export const Person = function all({ name, age, sex, isMarried, partnerName }) {
  let isMaried = '<p className="Person__partner">I am not married</p>';

  if (sex === 'm' && isMarried) {
    isMaried = '<p className="Person__partner">{partnerName} is my wife</p>';
  }

  if (sex === 'f' && isMarried) {
    isMaried = '<p className="Person__partner">{partnerName} is my husband</p>';
  }

  return (
    <>
      <h2 className="Person__name">
        My name is
        {name}
      </h2>
      {age && `<p className="Person__age">I am ${age}</p>`}
      {isMaried}
    </>
  );
};
