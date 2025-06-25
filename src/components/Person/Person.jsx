/* eslint-disable no-nested-ternary */

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let statusPartner;

  if (isMarried) {
    statusPartner =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  } else {
    // eslint-disable-next-line no-unused-vars
    statusPartner = 'I am not married';
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>

        {age && <p className="Person__age">I am {age}</p>}

        <p className="Person__partner">{statusPartner}</p>
      </section>
    </div>
  );
};
