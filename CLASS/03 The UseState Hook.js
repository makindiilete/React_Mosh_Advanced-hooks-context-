/*
1. Add a new folder "Hooks" >> Inside the dir, add a new file "counter.jsx"
All functions that starts with "use" are example of hooks in react e.g. useState, useEffect, useDispatch etc
The useState hooks returns an array of two elements : - The first element is the state and the second element is equivalent to "this.setState" and it is been used to set the state value

import React, {useState} from 'react';

const Counter = () => {
    const array = useState(0)
    const count = array[0]; //this.state.count
    const setState = array[1]; //this.setState()
    return (
        <div>
            Counter : {}
        </div>
    );
};

export default Counter;


THIS CAN BE RE-WRITTEN WITH ARRAY DESTRUCTURING

const [count, setState] = useState(0);
*/

//counter.jsx
import React, { useState } from "react";

const Counter = () => {
  //  counter state
  const [count, setCount] = useState(0);
  // name state
  const [name, setName] = useState("");
  return (
    <>
      {/*  this input field set each character as we type to the value of "name" state*/}
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {/*  here now we bind the value of name and count to form a sentence*/}
        {name} clicked {count} times
      </div>
      {/*  this function basically increment our count on click of the button*/}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default Counter;

/*
RULES OF HOOKS
## You cannot call hooks inside loops, conditions or nested functions
*/
