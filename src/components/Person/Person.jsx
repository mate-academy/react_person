import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  const personMarriedMessage = (
    <p className="Person__partner">
      {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
    </p>
  );
  const personSingleMessage = (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried === true ? personMarriedMessage : personSingleMessage}
    </section>
  );
};
