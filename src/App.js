import React,{useState} from 'react';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';

function App() {

  const [userList, setUsersList]=useState([])
  const addUserHandler=((userName,userAge,userCollege)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:userName,age:userAge,id:Math.random().toString(),college:userCollege}]
    })
  })

  return (
    <div>
    <AddUser onAdduser={addUserHandler}/>
    <UserList users={userList} />
    </div>
  );
}

export default App;
