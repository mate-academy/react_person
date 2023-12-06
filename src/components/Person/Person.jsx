export const Person = ({ person }) => {
  let isMaried;

  if (person.sex === 'm' && person.isMarried === true) {
    isMaried = (
      <p className="Person__partner">
        {`${person.partnerName} `}
        is my wife
      </p>
    );
  }

  if (person.sex === 'f' && person.isMarried === true) {
    isMaried = (
      <p className="Person__partner">
        {`${person.partnerName} `}
        is my husband
      </p>
    );
  }

  if (person.isMarried === false) {
    isMaried = <p className="Person__partner">I am not married</p>;
  }

  return (
    <>
      <h2 className="Person__name">
        My name is
        {` ${person.name}`}
      </h2>
      {person.age
        && (
          <p className="Person__age">
            I am
            {` ${person.age}`}
          </p>
        )}
      {isMaried}
    </>
  );
};
