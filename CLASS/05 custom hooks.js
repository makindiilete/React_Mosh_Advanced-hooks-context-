/*
useEffect gives us benefit of having our component logic in a single place. Let example we want to re-use the logic we have inside the callback function we passed to useEffect() in another component, we can do this easily by creating a custom hook that is reusable ; -

1)  Create a new file "useDocumentTitle"
*/

//useDocumentTitle.jsx
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log("Component unmounted");
    };
  });
}

//counter.jsx
import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  //  counter state
  const [count, setCount] = useState(0);
  // name state
  const [name, setName] = useState("");

  //we pass our custom hook here and supply the title
  useDocumentTitle(`${name} has clicked ${count} times`);
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
Now that we have extracted our useEffect logic inside a custom hook, we can easily reuse this in multiple places
*/
