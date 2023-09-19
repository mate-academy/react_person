export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  let maritalStatus;

  if (isMarried) {
    const partnerDescriptor = sex === 'm' ? 'wife' : 'husband';

    maritalStatus = `${partnerName} is my ${partnerDescriptor}`;
  } else {
    maritalStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {maritalStatus}
      </p>
    </section>
  );
};
