//use the context provuder and create the user authentication system to manage user login and logout function

import React from 'react'
import { useAuth } from './AuthContext'

function LoginAuth() {

  const {user,login,logout} = useAuth();
console.log(user)
  return (
 
     <div>
      <h1>Login and Logout System</h1>
      <h1>Logot hai app av</h1>
{
    user ? (
        <div>
        <p>Welcome ,{user.username} </p>
        <button onClick={logout} >Logout</button>
        </div>
    ):(

        <button onClick={()=>login({username:'user123'})} >Login</button>
      
    )
}
</div>
      
  )
}

export default LoginAuth
