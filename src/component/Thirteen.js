//login and rgister for the student 
import React, { useState } from 'react'

function Thirteen() {
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');
const [isRegistered,setIsRegistered]= useState('');
const [isLoggedIn,setIsLoggedIn] = useState('');
const [users,setUsers]= useState('');

const handleAuth=()=>{
    if(isRegistered){
        //login
if(isLoggedIn){
  const user =  users.find(u=>u.email === email && u.password === password)

  if(user){
    alert('login successful');
    setIsLoggedIn(true);
    
  }else{
    alert('login failed with credentials')
  }
}

    }else{
        //register
        const newUser = {email,password}
        setUsers([...users,newUser]);
        localStorage.setItem('user',JSON.stringify(...users,newUser));
        setIsLoggedIn(true);
    }
}


//handle logout 
const handleLogout=()=>{
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    localStorage.removeItem('user');
}

  return (
    <div>

        {isLoggedIn ? (
    <div>
       <h1>Welcome {email}</h1>
      <button onClick={handleLogout} >Logout</button>
       </div>

        ):(
            <>
                <div>
                    <h1>{isRegistered ? 'Login' : 'Register'}</h1>

                <form>

<input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
<button  onClick={handleAuth}>{isRegistered?'Login':'register'}</button>
</form>
<p>
{isRegistered ? 'Dont have a account ? Regsiter now ' :'Already  have a account? Login now'}

</p>
<button onClick={()=>setIsRegistered(!isRegistered)}>
{isRegistered ? 'register' :'Login'}
</button>
                </div>
                </>
        )}
        
    </div>
  )
}

export default Thirteen;
