import React from "react"

export const Person = ({ person }) => {
    const { name, age, sex, isMarried, partnerName } = person;

    const havePartner = () => {
        if (isMarried === false) {
            return 'I am not married';
        }
        if (sex === 'm') {
            return `${partnerName} is my wife`;
        } else {
            return `${partnerName} is my husband`;
        }
    }
    return (
        <section className="Person">
            <h2 className="Person__name">
                {`My name is ${name}`}
            </h2>
            <p className="Person__age">
                {person.age && `I am ${age}`}
            </p>
            <p className="Person__partner">
                {havePartner()}
            </p>
        </section>
    )
}
