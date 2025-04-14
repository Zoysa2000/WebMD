import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

function PatientReg()
{
  const [logo, setLogo] = useState('./profile.png');


  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file)); 
    }
  };
    const backgroundImageUrl = './back.jpg';
    return(
        <>
    <div className="container-fluid">
    <div className="row">
    <div className="back-reg card col-12 col-md-6 container d-none d-md-block" style={{backgroundImage:`url(${backgroundImageUrl})`,borderRight: '5px solid #DCDCDC	',}}>
    </div>
    <div className="col-12 col-md-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <img  alt="logo" src="./heart.jpg" style={{ height: "60px", width: "100px",marginTop:'40px' }} />
  <h3 className="mt-2" style={{ color: 'black',fontWeight: '700' }}>Welcome To WebMD Registration</h3>
  <p className="col-12 col-md-11 mt-2" style={{ color: 'black' }}>
  Machine Learning–Powered Heart Stroke Prediction Web Application is an intelligent digital tool designed to assess the risk of heart strokes based on user-provided health data. </p>
  <div className="card text-center col-12 col-md-8 mx-auto" style={{ borderRadius: '8px' }}>
   <div className="card-body">
   <form >
   {logo && (
        <div className="mt-1">
          <img src={logo} alt="Company Logo" style={{ width: '80px', height: '80px',borderRadius:'100%'}} />
        </div>
      )}
   <input
        className="input-field mt-3 w-100"
          type="text"
          placeholder="Your Name"
        />
        <input
        className="input-field mt-4 w-100"
          type="text"
          placeholder="Username"
        />
        <input
        className="input-field mt-4 w-100"
          type="password"
          placeholder="Password"
        />
          <input
        className="input-field mt-4 w-100"
          type="password"
          placeholder="Confirmpassword"
        />
        <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleLogoChange}
        style={{ display: 'none' }} // Hide the default file input
      />
      
      {/* Custom file upload button */}
      <label htmlFor="file-upload" className="btn btn-outline-dark mt-4 w-100 text-start">
        Select Profile Photo
      </label>
      <Button  type="submit" className="mt-3 w-100 mb-3" style={{backgroundColor:"red",borderColor:"red"}}>Register With WebMD</Button>
      </form>
    </div>
   </div>
</div>
</div>
    </div>
        </>
    )
}

export default PatientReg;