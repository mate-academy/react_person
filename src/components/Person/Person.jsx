import cn from 'classnames';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMarriedMan = sex === 'm' && isMarried;
  const isMarriedWoman = sex === 'f' && isMarried;
  const isSingle = !isMarried;

  let partnerInfo;

  if (isMarriedMan) {
    partnerInfo = `${partnerName} is my wife`;
  } else if (isMarriedWoman) {
    partnerInfo = `${partnerName} is my husband`;
  } else if (isSingle) {
    partnerInfo = 'I am not married';
  }

  return (
    <section
      className={cn('Person', {
        'Person--married': isMarried,
        'Person--single': !isMarried,
      })}
    >
      <h2 className={cn('Person__name')}>My name is {name}</h2>

      {age && <p className={cn('Person__age')}>I am {age}</p>}

      <p
        className={cn('Person__partner', {
          'Person__partner--wife': isMarriedMan,
          'Person__partner--husband': isMarriedWoman,
          'Person__partner--none': isSingle,
        })}
      >
        {partnerInfo}
      </p>
    </section>
  );
};
