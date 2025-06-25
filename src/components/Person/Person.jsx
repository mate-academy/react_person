// export const Person = ({ person }) => ();

const getPartnerText = (person) => {
    if (person.isMarried) {
      if (person.sex === "m") {
        return `${person.partnerName} is my wife`;
      } else if (person.sex === "f") {
        return `${person.partnerName} is my husband`;
      }
    }
    return "I am not married";
  };

export const Person = ({person}) => {

    return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && (
        <p className="Person__age">I am {person.age}</p>
      )}
     <p className="Person__partner">{getPartnerText(person)}</p>
    </section>
    )
}