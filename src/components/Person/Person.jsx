export const Person = ({ person }) => {
  return (
    <>
      <p className="Person__name">{person.name}</p>

      {person.age && (
        <p className="Person__age">{person.age}</p>
      )}

      {person.isMarried ? (
        <p className="Person__partner">
          {person.sex === 'man' ? 'wife' : 'husband'}: {person.partnerName}
        </p>
      ) : (
        <p>I am not married</p>
      )}
    </>
  );
};
