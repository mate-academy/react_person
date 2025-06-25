import './Person.scss';

export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {isMarried && (`${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`)}
        {!isMarried && ('I am not married')}
      </p>
    </section>
  );
};
