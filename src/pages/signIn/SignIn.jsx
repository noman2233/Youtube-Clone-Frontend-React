import React from "react";
import "./signIn.css";

const SignIn = () => {
  return (
    <>
    
    <div className="Container">
      <div className="Wrapper">
        <h1 className="Title">SIGN IN</h1>
        <form className="Form">
          <input type="email" placeholder="Email" className="Input" />
          <input placeholder="password" type="password" className="Input" />
          <button className="Button">LOGIN</button>
        </form>
      </div>
   
       <div className="Wrapper"> 
        <h1 className="Title">SIGN UP</h1>
        <form className="Form">
          <input type="text" placeholder="Username" className="Input" />
          <input type="email" placeholder="Email" className="Input" />
          <input placeholder="password" type="password" className="Input" />
          <button className="Button">SIGN UP</button>
        </form>
      </div>
      </div>
 
    </>
  );
};

export default SignIn;
