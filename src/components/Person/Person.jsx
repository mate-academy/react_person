import cn from "classnames";

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (isMarried) {
    partnerInfo =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <section className={cn('Person', { 'Person--married': isMarried, 'Person--single': !isMarried, })} >
      <h2 className={cn('Person__name')}>My name is {name}</h2>

      {age && <p className={cn('Person__age')}>I am {age}</p>}

      <p className={cn('Person__partner', { 'Person__partner--wife': sex === 'm' && isMarried, 'Person__partner--husband': sex === 'f' && isMarried, 'Person__partner--none': !isMarried, })} >
        {partnerInfo}
      </p>
    </section>
  );
};
