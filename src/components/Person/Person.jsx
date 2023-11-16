export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
          : 'I am not married'}
      </p>
    </section>
  </>
);
