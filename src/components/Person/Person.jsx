import '../../App.scss';

const notMarried = 'I am not married';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const marriedType = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (<p className="Person__age">{age && `I am ${age}`}</p>)}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${marriedType}`
          : notMarried}
      </p>
    </section>
  );
};
