import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='wrapper'>
           <form action ="">
               <h1>Login</h1>
               <div classname="input-box"> 
               <input type="text" placeholder='Username' required />
               </div>

               <div classname="input-box"> 
               <input type="password" placeholder='Password' required />
               </div>
           </form>
           </div>
    );
};
 export default LoginForm;