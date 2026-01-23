import cn from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerStatus = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section
      className={cn('Person', {
        'Person--married': isMarried,
        'Person--male': sex === 'm',
        'Person--female': sex === 'f',
      })}
    >
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p
        className={cn('Person__partner', {
          'Person__partner--married': isMarried,
          'Person__partner--single': !isMarried,
        })}
      >
        {partnerStatus}
      </p>
    </section>
  );
};
