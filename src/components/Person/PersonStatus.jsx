export const PersonStatus = ({ sex, isMarried, partnerName }) =>
  isMarried ? (
    <p className="Person__partner">
      {sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );
