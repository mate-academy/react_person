import './Person.scss';

export const Person = (props) => {
  const { name, age, isMarried, sex, partnerName } = props.person;
  let relationship;

  if (isMarried) {
    const spouse = sex === 'm' ? 'wife' : 'husband';

    relationship = `${partnerName} is my ${spouse}`;
  } else {
    relationship = 'I am not married';
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

      <p className="Person__partner">{relationship}</p>
    </section>
  );
};
