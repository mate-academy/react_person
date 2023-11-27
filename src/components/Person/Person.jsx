import './Person.scss';

export const Person = (props) => {
  const { name, age, isMarried, sex, partnerName } = props.person;
  let relationship;

  if (isMarried) {
    const spouse = sex === 'm' ? 'wife' : 'husband';

    relationship = <p className="Person__partner">{`${partnerName} is my ${spouse}`}</p>;
  } else {
    relationship = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )
      }

      {relationship}
    </section>
  );
};
