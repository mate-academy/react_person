export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const notMarried = !isMarried && 'I am not married';
  const myPartner = 
    ((sex === 'f' && partnerName) && `${partnerName} is my husband`)
    || ((sex === 'm' && partnerName) && `${partnerName} is my wife`);

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {notMarried}
        {myPartner}
      </p>
    </section>
  )
};
