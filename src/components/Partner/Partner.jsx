export const Partner = ({ person }) => (
  <>
    {person.sex === 'm' ? (
      <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
    ) : (
      <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
    )}
  </>
);
