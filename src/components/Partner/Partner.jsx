export const Partner = ({ person }) => {
  const { partnerName, sex, isMarried } = person;

  return (
    <>
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {sex === 'f' ? 'husband' : 'wife'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </>
  );
};
