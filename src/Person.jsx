import './App.scss';

export const Person = ({ person }) => {
  const { 
    name, 
    age, 
    sex, 
    isMarried,
  } = person;

  const partner = person.partnerName;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          <>
            {`I am ${age}`}
          </>
        </p>
      )}
      <p className="Person__partner">
        {isMarried === true
          ? `${partner} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
