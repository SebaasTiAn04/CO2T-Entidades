import './css/login.css';
import {useState} from 'react';

function Signup(){
    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");
      return (
          <div className='container'>
        <div className='container-form'>
          <h1>SigUp</h1>
          <form className='form'>
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className='container-img'>
          <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt=""/>
        </div>
      </div>
      )
  }
  
  export default Signup;