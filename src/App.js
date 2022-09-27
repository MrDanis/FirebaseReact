import logo from './logo.svg';
import { db } from './firebase-configue';
import './App.css';
import React,{useState,useEffect} from 'react';
import {collection,getDocs} from "firebase/firestore";
function App() {
const [user,setUsers] = useState([]);
const userCollectionRef = collection(db,"users");
useEffect(()=>{
  const getUsers = async() =>{
    const data = await getDocs(userCollectionRef);
    console.log(data);
    console.log(data.docs.length)
    data.docs.forEach((doc) => {
      console.log(doc);
    })
    console.log(data.docs);
    setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
getUsers();
},[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {console.log(user)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          user&&user.map((item,index)=>
           <p key={index} style={{color:'white'}}>
           {item.name}
           </p>

          )
        }
      </header>
    </div>
  );
}

export default App;
