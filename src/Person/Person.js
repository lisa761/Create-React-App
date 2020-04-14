import React from 'react';

const person = (props) => {
    // return <p>I'm a Person and I am years {Math.floor(Math.random() * 30)} old!</p>
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        {/* Here the props.children is used to render the value between the Person opening and closing tags. 
        It can also be used to render inner HTML code between those tags */}
        </div>
    );
}
// We need to import react because the above syntax will be converted into the create element syntax
// This method of creating components is a better practice that using the class way in App.js

export default person;