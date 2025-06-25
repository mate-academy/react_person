import React from "react";

export const Person = ({person}) => {
  const { name, age, isMarried, partnerName, sex } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  )
}
