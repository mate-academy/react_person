// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  return (
    <>
      <p className="Person__name">{`My name is ${person.name}`}</p>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">
        {!person.isMarried
          ? 'I am not married'
            : `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
      </p>
    </>
  );
};
