import React, {useState } from "react";
import FetchData from './FetchData';
function LoginForm() {
    const[loggedIn, setLoggedIn]= useState(false);
    const[formData, setFormData]= useState({username:'',password:''});
    const handleChange=(event)=>{
    const{name, value}=event.target;
    setFormData({
        ...formData,[name]:value
    });
};
const handleSumbit=(e)=>{
        e.preventDefault();
        if(formData.username==='avinash'&&formData.password==="Superman@123")
            {
                setLoggedIn(true);
            }
            else{
                alert('Invalid Username and password');
            }
};
if(loggedIn){
    return <FetchData></FetchData>
}
        
    return (
       <form name="login" onSubmit={handleSumbit}>
        <div className="username" margin='8px'>
            <label>
                <input type='text' name='username'value={formData.username}onChange={handleChange} placeholder="username"></input>
            </label>
        </div>
        <div>
            <label>
                <input type='password' name='password' value={formData.password}onChange={handleChange} placeholder="Password"></input>
            </label>
        </div>
        <div>
            <button type='Submit'>Submit</button>
        </div>
       </form> 
    )
}

export default LoginForm;
