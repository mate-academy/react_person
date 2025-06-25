import React from "react";

export function Person({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName
  }
}) {
  const partnerSex = sex === 'f'
  ? `${partnerName} is my husband`
  : `${partnerName} is my wife`;

  const status = isMarried
  ? partnerSex :
  'I am not married';

  return (
    <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{status}</p>
    </section>
  </div>
  )
}
