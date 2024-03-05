import './Person.scss';

const IsMarriedParagraph = (sex, partnerName) => {
  return sex === 'f'
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;
};

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried ? IsMarriedParagraph(sex, partnerName) : 'I am not married'}
      </p>
    </section>
  );
};
