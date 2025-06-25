// export const Person = ({ person }) => ();
import React from 'react';
import './Person.css';

export function Person({ person }) {
    const { name, age, gender, isMarried, partnerName } = person;
    return (
        <div className="Person">
            <div className="Person__name">Name: {name}</div>
            {age && <div className="Person__age">Age: {age}</div>}
            <div className="Person__partner">
                {isMarried ? (
                    gender === 'male' ? `Wife: ${partnerName}` : `Husband: ${partnerName}`
                ) : (
                    'I am not married'
                )}
            </div>
        </div>
    );
}
