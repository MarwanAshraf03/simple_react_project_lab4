import React, { createContext, useEffect, useState } from 'react';
import UseTimer from '../hooks/useTimer';
import {v4 as uuid} from "uuid";
import axios from 'axios';
export const usersContext=createContext()
const UsersContextProvider = ({children}) => {
    
  var [usersArr , setUsers]=useState(null )
    //      [
    //     {id:uuid(),name:"Ahmed" , age:20},
    //     {id:uuid(),name:"Mona" , age:27},
    //     {id:uuid(),name:"Laila" , age:2},
    //     {id:uuid(),name:"Ali" , age:10},
    //     {id:uuid(),name:"Mahmoud" , age:40},
    // ]
   
 
    const [counter, setCounter]= useState(0);
    const [disabled, setDisabled]=useState(false)
    const [time,dec,reset]=UseTimer(30)


    const addUser=(userData)=>{
        setUsers([...usersArr,{...userData,id:uuid(),age:+(userData.age)}])
        setCounter(oldCounter=>oldCounter+1)
        if(counter>=2)
            setDisabled(true)
    }
    const incAge=(userId)=>{
        setUsers((oldUsers)=>oldUsers.map((u)=>u.id==userId?{...u,age:u.age+1}:u))
    }
    //  useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data))
    //     // fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUsers(data))
    // },[])
    return (
        <usersContext.Provider value={{counter ,time,reset,dec,incAge,usersArr,disabled,addUser}}>
            {children}
        </usersContext.Provider>
    );
}

export default UsersContextProvider;
