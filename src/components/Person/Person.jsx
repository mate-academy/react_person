// export const Person = ({ person }) => ();
import '../../App.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personPartenStatus = sex === 'm' ? 'wife' : 'husband';
  // const personPartner = person.isMarried
  //   ? `${person.personName} is my ${personPartenStatus}`
  //   : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${personPartenStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};

export default Person;
