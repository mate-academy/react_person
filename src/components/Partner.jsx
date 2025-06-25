export const Partner = ({ sex, isMarried, partnerName }) => {
  let message = 'I am not married';

  if (sex === 'm' && isMarried) {
    message = `${partnerName} is my wife`;
  }

  if (sex === 'f' && isMarried) {
    message = `${partnerName} is my husband`;
  }

  return <p className="Person__partner">{message}</p>;
};
