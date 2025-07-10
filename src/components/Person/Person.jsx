export const Person = ({ name, age = null, sex, isMarried, partnerName }) => (
  <>
    <p>{`My name is ${name}`}</p>
    {age !== undefined && <p>{`I am ${age}`}</p>}
    {isMarried &&
      partnerName &&
      (sex === 'f'
        ? `${partnerName} is my husband`
        : `${partnerName} is my wife`)}
  </>
);
