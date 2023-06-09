import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModel';
import classes from "./AddUser.module.css"


function AddUser(props) {
    const [enteruservalue,setuservalue]=useState("")
    const [enteragevalue,setagevalue]=useState("")
    const [error, setError]=useState()
    const AddUserHandler=(event)=>{
        event.preventDefault();
        if(enteruservalue.trim().length===0 ||enteragevalue.trim().length===0){
          setError({
            title:"Invalid input",
            message:"Please enter a valid name ,age and college name (non-empty values)."
          })
            return;
        }
        if(+enteragevalue<1){
          setError({
            title:"Invalid age",
            message:"Please enter a valid age (>0)."
          })
            return;
        }
        // console.log(enteruservalue,enteragevalue)
        props.onAdduser(enteruservalue,enteragevalue)
        setuservalue("");
        setagevalue("")
    }

    const userchangedHandler=(event)=>{
        setuservalue(event.target.value)

    }
    const agechangedHanler=(event)=>{
        setagevalue(event.target.value)
    }
    const errorHandler=()=>{
      setError(null);
    }
    
  return (
    <div>
    {error && <ErrorModal title={error.title} massage={error.message}  onConfirm={errorHandler} />}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
      <label htmlFor='Users'>Users : </label>
      <input   id="username"type='text' value={enteruservalue} onChange={userchangedHandler}/>
      <label htmlFor='Users' >Age (year) :</label>
      <input  id="age"type='number'value={enteragevalue} onChange={agechangedHanler}/>
      <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser
 