import React,{useState} from 'react';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';

function App() {

  const [userList, setUsersList]=useState([])
  const addUserHandler=((uName,uAge)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
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
