import React, { useState, Fragment }from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';



function App() {
   const  [usersList, setUsersList] = useState([]);

   const addUserHandler = (uName, uAge, ucollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age:uAge, college:ucollege, id: Math.random().toString()},
      ];
    });
   };

  return (
    <Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
