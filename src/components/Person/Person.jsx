const Age = ({ age }) => {
  if (age) {
    return <p className="Person__age">I am {age}</p>;
  }

  return '';
};

const Married = ({ sex, married, partnerName = '' }) => {
  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  if (married) {
    return (
      <p className="Person__partner">
        {partnerName} is my {partnerSex}
      </p>
    );
  }

  return <p className="Person__partner">I am not married</p>;
};

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <Age age={person.age} />
      <Married
        sex={person.sex}
        married={person.isMarried}
        partnerName={person.partnerName}
      />
    </section>
  );
};
