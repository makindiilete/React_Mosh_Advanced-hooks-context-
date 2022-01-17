/*
THE PROBLEM WITH CLASS LIFECYCLE HOOKS : - Check attached screenshot..

Now let us set the title of the react document dynamically based on the value of the state
*/

//counter.jsx
import React, { useEffect, useState } from "react";

const Counter = () => {
  //  counter state
  const [count, setCount] = useState(0);
  // name state
  const [name, setName] = useState("");

  //componentDidMount & componentDidUpdate
  //ds hook is called everytime there is a change in the state
  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;
  });
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
To only make our callback function inside useEffect getting called only when a particular change is updated in the component, we can pass some dependencies to the useEffect hook

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;
  }, [name, count]); //dependencies


  //componentWillUnmount
    useEffect(() => {
    document.title = `${name} has clicked ${count} times`;

    //ds function get called when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, [name, count]);
*/

import React, { useEffect, useState } from "react";

const Counter = () => {
  //  counter state
  const [count, setCount] = useState(0);
  // name state
  const [name, setName] = useState("");

  //ds hook is called everytime there is a change in the state
  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;

    //ds function get called when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, []);
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
