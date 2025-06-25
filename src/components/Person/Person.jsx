const married = (sex, partnerName) => {
    let content;
  
    if (sex === 'm') {
      content = <p className="Person__partner">{`${partnerName} is my wife`}</p>;
    } else if (sex === 'f') {
      content = (
        <p className="Person__partner">{`${partnerName} is my husband`}</p>
      );
    }
  
    return content;
  };

  
export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age ? <p className="Person__age">{`I am ${person.age}`}</p> : ''}

      {person.isMarried ? (
        married(person.sex, person.partnerName)
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  </div>
);

