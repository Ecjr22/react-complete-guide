import React from 'react';
import './Person.css';

//This is a Functional Component. 
//It is also referred to as 'presentational', 'dumb', or 'stateless' components
// The 'props' arguement can be named whatever I like but the best practice is to name it 'props'
// 'props' takes the fields i've passed in the 'Person'
const person = (props) => {
    return (
        <div className = 'Person'>
            <p onClick={props.click}>I'm {props.name}  and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;