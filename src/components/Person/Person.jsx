// export const Person = ({ person }) => ();
export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;
  let statusMessage;

  if (isMarried) {
    switch (sex) {
      case 'm':
        statusMessage = `${partnerName} is my wife`;
        break;

      case 'f':
        statusMessage = `${partnerName} is my husband`;
        break;

      default:
        break;
    }
  } else {
    statusMessage = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{statusMessage}</p>
    </section>
  );
}
