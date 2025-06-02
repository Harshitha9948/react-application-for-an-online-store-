import React, { useState } from 'react'; 
 
function Register() {     const [user, setUser] = useState({ name: "", email: "", password: "" }); 
 
    const handleChange = (e) => {         setUser({ ...user, [e.target.name]: e.target.value }); 
    }; 
 
    const handleSubmit = (e) => {         e.preventDefault();         alert("Registration Successful!"); 
    }; 
 
    return ( 
        <div> 
            <h2>Register</h2> 
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /> 
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /> 
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /> 
                <button type="submit">Register</button> 
            </form> 
        </div> 
    ); 
} 
 
export default Register; 
