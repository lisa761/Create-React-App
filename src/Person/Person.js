import React from 'react';
import './Person.css'
// Reacts makes it possible to import CSS files, it doesn't work without importing as no files is added to the
// build workflow unless its imported.
// The style tags are added dynamically by webpack. It manages the imports you add.
// It also adds the additional webkit stuff to get your stylings to work in many browsers

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            {/* for some reason the input type text doe snot work if there is not onChanged but there is a value */}
        </div>
    );
}

export default person;