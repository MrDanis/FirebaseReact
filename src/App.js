import logo from './logo.svg';
import { db } from './firebase-configue';
import './App.css';
import React,{useState,useEffect} from 'react';
import {collection,getDocs} from "firebase/firestore";
function App() {
const [user,setUsers] = useState([]);
const [loading,setloading] = useState(true);
const userCollectionRef = collection(db,"users");
useEffect(()=>{
  const getUsers = async() =>{
    const data = await getDocs(userCollectionRef);
    if(data){
          setloading(false);
    }
    else{
      setloading(true);
    }
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
          loading?<p style={{color:'white'}}>
            Fetching the products......             
           </p>:
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
