import './Person.scss';

const getMarriedInfo = (sex, partnerName) => {
  return `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;
};

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried ? getMarriedInfo(sex, partnerName) : 'I am not married'}
      </p>
    </section>
  );
};
