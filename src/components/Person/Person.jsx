import '../../App.scss';

export const Person = ({ person }) => {
  const isNotMarried = person.isMarried === false && 'I am not married';
  const isMen = person.sex === 'm' && `${person.partnerName} is my wife`;
  const isAge = person.age;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {isAge && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {isNotMarried || isMen || `${person.partnerName} is my husband`}
      </p>
    </section>
  );
};
