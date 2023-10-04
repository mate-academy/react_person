export const Person = ({ person }) => (
  <>
    <p className="Person__name">
      {`My name is ${person.name}`}
    </p>
    {person.age && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )
    }
    {person.isMarried ? (
      <>
        {person.sex === 'm' ? (
          <p className="Person__partner">
            {`${person.partnerName} is my wife`}
          </p>
        ) : (
          <p className="Person__partner">
            {`${person.partnerName} is my husband`}
          </p>
        )}
      </>
    ) : (
      <>
        <p className="Person__partner">
          I am not married
        </p>
      </>
    )
    }
  </>
);
