import './Person.scss';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let partner;

  if (!isMarried) {
    partner = 'I am not married';
  } else if (sex === 'm') {
    partner = `${partnerName} is my wife`;
  } else {
    partner = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : ''}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
