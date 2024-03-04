// export const Person = ({ person }) => (

//   const personPartnerType = person.sex === 'm' ? 'wife' : 'husband';

//   const personPartner = person.isMarried ? `${partnerName} is my ${personPartnerType}` : 'I am not married';

// return (
//   <section className="Person">
//     <h2 className="Person__name">{`My name is ${person.name}`}</h2>

//     {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

//     <p className="Person__partner">
//       {`${personPartner}`}
//     </p>
//   </section>
// );
// );

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personPartnerType = sex === 'm' ? 'wife' : 'husband';
  const personPartner = isMarried
    ? `${partnerName} is my ${personPartnerType}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{`${personPartner}`}</p>
    </section>
  );
};
