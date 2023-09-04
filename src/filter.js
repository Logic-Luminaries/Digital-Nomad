import React from 'react';


function Login() {
 

  const handleLogin = (e) => {
    e.preventDefault();
      console.log('Filter clicked');
    }
    return (
      <div className="Filter-container">
          <button type="submit">Filter</button>
         
      </div>
    );
  };

 

export default Login;
