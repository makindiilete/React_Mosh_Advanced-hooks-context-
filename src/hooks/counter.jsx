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
