// import { misha } from "../../App"
// import { olya } from "../../App"
// import { alex } from "../../App"

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${partner}` : 'I am not married'}
      </p>
    </section>
  );
};

// {/* <section className="Person">
// <h2 className="Person__name">{`My name is ${person.name}`}</h2>
// {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
// {person.partnerName ? (
//   <p>{`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}</p>
// ) : (
//   <p>I am not married</p>
// )}
// </section> */}
