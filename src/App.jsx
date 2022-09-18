import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
import { Table } from './Table';

function App() {
  const initialData = {
    username : "",
    email : "",
    password: ""
  }
  const [inputValue, setinputValue] = useState(initialData);


  const handleInput = (e) => {
    setinputValue((prev)=>({...prev, [e.target.name] : e.target.value}))
    console.log(inputValue)
  };

  const handleForm = (e) => {
    e.preventDefault();
    const data = JSON.stringify(inputValue)
    console.log(data);
    try {
       axios.post("http://localhost:5000/api/user/create",data,{
        headers:{
          'Content-Type':'application/json'
        }
      }).then((res) => {
        console.log(res.data)
        
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleForm} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <input type="text" name="username" id="username" onChange={(handleInput)} value={inputValue.username} />
        <input type="email" name="email" id="email" onChange={handleInput} value={inputValue.email} />
        <input type="password" name="password" id="password" onChange={handleInput} value={inputValue.password} />
        <button type="submit">Submit</button>        
      </form>


    <Table/>

      
    </div>
  );
}

export default App;
