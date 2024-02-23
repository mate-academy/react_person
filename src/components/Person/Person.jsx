// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const manIsMarried = isMarried && sex === 'm';
  const womanIsMarried = isMarried && sex === 'f';

  return (
    <section className="Person">
      <p className="Person__name">
        {`My name is ${name}`}
      </p>

      {age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {manIsMarried && `${partnerName} is my wife`}
        {womanIsMarried && `${partnerName} is my husband`}
        {!isMarried && `I am not married`}
      </p>
    </section>
  );
};
