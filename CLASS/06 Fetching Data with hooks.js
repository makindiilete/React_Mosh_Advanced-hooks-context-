/*
We will learn how to consume api with hooks in react using fake rest api from json typicode. We will use the /Users get requests.

1)  Create a new file "Users.jsx" in the hooks folder
*/

//users.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //we create a function inside the useEffect callback in other to make dt nested function async bcos we cannot make the useEffect callback fn an async fn
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    getUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

//App.js
import React from "react";
import Movie from "./hoc/Movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";

const App = () => {
  //passing a new props
  return (
    <>
      <Movie id={1} />
      <Counter />
      <Users />
    </>
  );
};

export default App;
