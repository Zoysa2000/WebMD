import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import Swal from "sweetalert2";

const Predict = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    ever_married: '',
    work_type: '',
    residence_type: '',
    avg_glucose_level: '',
    bmi: '',
    smoking_status: '',
  });

  const backgroundImageUrl = './predict.png';
  const logo = './profile.png';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });// spread operator
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Please fill out the ${key.replace(/_/g, ' ')} field.`);
        return;
      }
    }
  
    // Convert values to numbers
    const formattedData = {
      features: [
        Number(formData.gender),
        Number(formData.age),
        Number(formData.hypertension),
        Number(formData.heart_disease),
        Number(formData.ever_married),
        Number(formData.work_type),
        Number(formData.residence_type),
        Number(formData.avg_glucose_level),
        Number(formData.bmi),
        Number(formData.smoking_status),
      ],
    };


// Corrected Axios POST
axios.post('http://127.0.0.1:5000/predict/', formattedData)
  .then(response => {
    console.log("Prediction Result:", response.data);
    if(response.data.prediction[0]===1)
    {
      async function showTermsAndConditions() {
        const { value: accept } = await Swal.fire({
          title: "Terms and Conditions",
          input: "checkbox",
          inputValue: 1, // if you want it to be pre-checked; otherwise set to 0
          inputPlaceholder: `
            ML Model Prediction & not totally depend on the result
          `,
          confirmButtonText: `
            Continue&nbsp;<i class="fa fa-arrow-right"></i>
          `,
         confirmButtonColor: '#28a745', // Green color
        });
      
        if (accept) {
          Swal.fire({
           text: "It seems likely that you're having a heart stroke. Please Refer Medical Attention!",
           imageUrl: "./heart.jpg", // <-- Your PNG URL here
           imageWidth: 120,
           imageHeight: 120,
           imageAlt: "Custom success image",
           confirmButtonColor: '#28a745', // Green color
          });
        }
      }
      showTermsAndConditions()
      
    }

    else{
      async function showTermsAndConditions() {
        const { value: accept } = await Swal.fire({
          title: "Terms and Conditions",
          input: "checkbox",
          inputValue: 1, // if you want it to be pre-checked; otherwise set to 0
          inputPlaceholder: `
            ML Model Prediction & not totally depend on the result
          `,
          confirmButtonText: `
            Continue&nbsp;<i class="fa fa-arrow-right"></i>
          `,
          confirmButtonColor: '#28a745', // Green color
        });
      
        if (accept) {
          Swal.fire({
            text: "It seems unlikely that you're having a heart stroke. Consider adopting healthy habits!",
            imageUrl: "./heart.jpg", // <-- Your PNG URL here
           imageWidth: 120,
           imageHeight: 120,
           imageAlt: "Custom success image",
           confirmButtonColor: '#28a745', // Green color
          });
        }
      }
      showTermsAndConditions()
    }
  })
  .catch(error => {
    console.error("Error sending data:", error);
    alert("An error occurred while sending data to the server.");
  });
  
  };

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="back-reg card col-12 col-md-6 container d-none d-md-block"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            borderRight: '5px solid #DCDCDC',
          }}></div>

        <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
          <img alt="logo" src="./heart.jpg" style={{ height: "80px", width: "100px", marginTop: '40px' }} />
          <h3 className="mt-2" style={{ color: 'black', fontWeight: '700' }}>
            Welcome To WebMD Check Your Heart Status
          </h3>
          <p className="col-12 col-md-11 mt-2" style={{ color: 'black' }}>
            Machine Learning–Powered Heart Stroke Prediction Web Application is an intelligent digital tool designed to assess the risk of heart strokes based on user-provided health data.
          </p>
          <div className="card text-center col-12 col-md-8 mx-auto" style={{ borderRadius: '8px' }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="mt-1">
          <img src={logo} alt="Company Logo" style={{ width: '60px', height: '60px',borderRadius:'100%'}} />
        </div>
                {/* Gender and Age */}
                <div className="row mb-3 mt-3">
                  <div className="col-md-6">
                    <select className="form-control  custom-focus" name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Gender</option>
                      <option value="1">Male</option>
                      <option value="0">Female</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    
                    <input  placeholder="Age" type="number" className="form-control custom-focus" name="age" value={formData.age} onChange={handleChange} required />
                  </div>
                </div>

                {/* Hypertension and Heart Disease */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="hypertension" value={formData.hypertension} onChange={handleChange} required>
                      <option value="">Hypertension</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="heart_disease" value={formData.heart_disease} onChange={handleChange} required>
                      <option value="">Heart Disease</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                </div>

                {/* Married and Work Type */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="ever_married" value={formData.ever_married} onChange={handleChange} required>
                      <option value="">Married Status</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="work_type" value={formData.work_type} onChange={handleChange} required>
                      <option value="">Work Type</option>
                      <option value="1">Private</option>
                      <option value="2">Government Job</option>
                      <option value="3">Self-employed</option>
                    </select>
                  </div>
                </div>

                {/* Residence and Glucose */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="residence_type" value={formData.residence_type} onChange={handleChange} required>
                      <option value="">Residence Type</option>
                      <option value="1">Urban</option>
                      <option value="2">Rural</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input placeholder="Average Glucose Level" type="number" className="form-control custom-focus" name="avg_glucose_level" value={formData.avg_glucose_level} onChange={handleChange} required />
                  </div>
                </div>

                {/* BMI and Smoking */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input placeholder="BMI"  type="number" className="form-control custom-focus" name="bmi" value={formData.bmi} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <select className="form-control custom-focus" name="smoking_status" value={formData.smoking_status} onChange={handleChange} required>
                      <option value="">Smoking Status</option>
                      <option value="1">Formerly Smoked</option>
                      <option value="2">Never Smoked</option>
                      <option value="3">Smokes</option>
                    </select>
                  </div>
                </div>
<Button type="submit" className="mt-3 w-100 mb-3" style={{ backgroundColor: "red", borderColor: "red" }}>
                  Predict My Heart Status
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
  {`
    .custom-focus:focus {
      border-color: black !important;
      box-shadow: 0 0 0 0.01rem black !important;
    }
  `}
  
</style>
    </>
    
  );
};

export default Predict;


