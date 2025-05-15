export const Partner = ({ isMarried, sex, partnerName }) => {
  if (!isMarried) {
    return (
      <p className="Person__partner">
      I am not married
    </p>
    );
  }

  if (sex === 'f') {
    return (
      <p className="Person__partner">
        {`${partnerName} is my husband`}
      </p>
    );
  }

  return (
    <p className="Person__partner">
      {`${partnerName} is my wife`}
    </p>
  );
};
