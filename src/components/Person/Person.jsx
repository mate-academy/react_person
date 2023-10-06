export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partner = null;

  if (isMarried) {
    if (sex === 'm') {
      partner = (
        <div className="Person__partner">
          {partnerName}
          {' '}
          is my wife
        </div>
      );
    } else if (sex === 'f') {
      partner = (
        <div className="Person__partner">
          {partnerName}
          {' '}
          is my husband
        </div>
      );
    }
  } else {
    partner = <div className="Person__partner">I am not married</div>;
  }

  return (
    <div className="Person">
      <div className="Person__name">
        My name is
        {' '}
        {name}
      </div>
      {age && (
      <div className="Person__age">
        I am
        {' '}
        {age}
      </div>
      )}
      {partner}
    </div>
  );
};
