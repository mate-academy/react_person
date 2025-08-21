export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  // Логика для текста про партнёра
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';
  const partnerText = isMarried
    ? `My ${partnerLabel} is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>

      {age && (
        <p className="Person__age">
          I am {age}
        </p>
      )}

      <p className="Person__partner">
        {partnerText}
      </p>
    </section>
  );
};

// import cn from 'classnames';

// export const Person = ({ person }) => (
//   <section className="Person">
//     <h2
//       className={cn('Person__name', {
//         'Person__name--married': person.isMarried,
//         'Person__name--single': !person.isMarried,
//       })}
//     >
//       My name is {person.name}
//     </h2>

//     <p
//       className={cn('Person__age', {
//         'Person__age--adult': person.age >= 18,
//         'Person__age--minor': person.age < 18,
//       })}
//     >
//       {person.age ? `I am ${person.age}` : 'Age is not specified'}
//     </p>
//     <p
//       className={cn('Person__partner', {
//         'Person__partner--married': person.isMarried,
//         'Person__partner--single': !person.isMarried,
//       })}
//     >
//       {person.isMarried
//         ? `My ${person.sex === 'm' ? 'wife' : 'husband'} is ${person.partnerName}`
//         : 'I am not married'}
//     </p>
//   </section>
// );
