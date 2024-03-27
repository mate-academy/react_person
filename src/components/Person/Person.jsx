import React from 'react'

const isMarry = (sex, partnerName) => {
  if (sex === 'm') {
    return <p className="Person__partner">{partnerName} is my wife</p>
  } else if (sex === 'f') {
    return <p className="Person__partner">{partnerName} is my husband</p>
  } else {
    return <p className="Person__partner">I am not married</p>
  }
}

export const Person = ({person}) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {
        isMarried
        ?
          isMarry(sex, partnerName)
        :
        <p className="Person__partner">I am not married</p>
      }
    </section>
  )
}
