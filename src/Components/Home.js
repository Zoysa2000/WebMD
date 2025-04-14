import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import Info from "./Info";
import Footer from "./Footer";

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/489006679_18391899934114154_244085429873608196_nfull.jpg" className="carousel-img"  onDragStart={handleDragStart} role="presentation"  />,
	<img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/488651535_18391564714114154_4619168879020743748_nfull.jpg"className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
	<img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/487914717_18390916960114154_2062779908512764890_nfull.jpg" className="carousel-img"  onDragStart={handleDragStart} role="presentation"/>,
  <img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/487358715_18390213760114154_8331193208072691423_nfull.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation"/>,
	<img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/489488320_18392402788114154_7028342106412823005_nfull.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
	<img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/485644547_18388931821114154_8199988363279812850_nfull.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
  <img alt='logo' src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/485638368_18389395816114154_1200480732569100951_nfull.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
	<img alt='logo'src="https://world-heart-federation.org/wp-content/uploads/sb-instagram-feed-images/486767393_18390049927114154_2289055999805198852_nfull.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
];

function Home()
{
  const navigate=useNavigate();
  const responsive = {
    0: { items: 2 },    // xs
    576: { items: 2 },  // sm
    768: { items: 3 },  // md
    992: { items: 4 },  // lg
    1200: { items: 5 }  // xl
  };
    const backgroundImageUrl = './backImage.png';  
    


    const handleReg=()=>
    {
      navigate("/", { replace: true }); 
    }

    const handleuserReg=()=>
    {
      navigate('/PatientReg',{replace:true});
    }

    const handlePredict =()=>
    {
      navigate('/Predict',{replace:true});
    }
    

    return(
  <>
<div className="container-fluid position-relative p-0">
  {/* Background Image Section */}
  <div
    className="bg-image w-100"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      height: '70vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(2px)',
      zIndex: 0,
    }}
  ></div>

  {/* Overlay Content */}
  <div
    className="position-absolute top-50 start-50 translate-middle w-100 px-3"
    style={{ maxWidth: '1200px' }}
  >
    <div className="row">
      <div className="col-md-6 col-12 text-center text-md-start">
        <p
          style={{
            fontSize: '3rem',
            fontWeight: '400',
            color: '#fff',
            lineHeight: '1.3',
          }}
        >
          Cutting Edge Solution
        </p>
        <p
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#fff',
            lineHeight: '1.2',
          }}
        >
          for Predict Heart Storke
        </p>
        <p className="mt-3" style={{ fontSize: '1rem', color: '#fff' }}>
        At the World Heart Federation, we work tirelessly to ensure the global population is provided with accurate and up to date details and data on cardiovascular diseases.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-md-row gap-3 mt-4 justify-content-center justify-content-md-start">
          <Popup
            trigger={
              <button style={{backgroundColor:"red"}} type="button" className="btn  text-white">
                Registration WebMD
              </button>
            }
            modal
            overlayClassName="popup-overlay"
            contentStyle={{
              width: '700px',
              padding: '0',
              border: 'none',
              background: 'none',
            }}
          >
            <div className="popup-content p-3">
              <img alt="logo" src="./heart.jpg" style={{ height: '60px', width: '50px' }} />
              <p className="fs-6 text-dark mt-2">Select the category If you want to Register</p>
              <div className="btn-grp gap-3">
                <button style={{backgroundColor:"red",color:"#fff"}} onClick={handleReg} type="button" className="btn">
                  Doctors
                </button>
                <button style={{backgroundColor:"red", color:"#fff"}} onClick={handleuserReg} type="button" className="btn ">
                  Patients
                </button>
              </div>
            </div>
          </Popup>

          <Popup
            trigger={
              <button type="button"  style={{backgroundColor:"red"}} className="btn text-white" onClick={handlePredict}>
                Login WebMD
              </button>
            }
            modal
            overlayClassName="popup-overlay"
            contentStyle={{
              width: '700px',
              padding: '0',
              border: 'none',
              background: 'none',
            }}
          >
            <div className="popup-content p-3">
              <img alt="logo" src="./heart.jpg" style={{ height: '60px', width: '50px' }} />
              <form className="form-container">
                <input
                  className="input-field mt-3 w-100"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="input-field mt-3 w-100"
                  type="password"
                  placeholder="Password"
                />
                <button style={{backgroundColor:"red"}} className="mt-3 w-100 btn text-white" onClick={handlePredict}>
                  <IoMdLogIn size={25} /> &nbsp;Login WebMD
                </button>
                <Button className="mt-3 w-100 btn btn-outline-dark">
                  <FcGoogle size={25} /> &nbsp;Google Login
                </Button>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </div>
</div>



     <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <Zoom>
        <img className="d-none d-md-block"  alt="web-logo" src='./heart.jpg' style={{height:'350px',width:'80%'}}></img>
        </Zoom>
        <img className="d-block d-md-none mt-3"  alt="web-logo" src='./heart.jpg' style={{height:'250px',width:'80%'}}></img>
        </div>
        <div className="col-12 col-md-6">
        <p className="d-flex justify-content-left align-item-left mt-5" style={{fontSize:'30px',color:'#343a40',fontWeight:'700'}} >About WebMD</p>
        <p style={{lineHeight:'2px',fontSize:'18px',fontWeight:'500'}}>🧠 ML-Powered Heart Stroke Prediction Web App</p>
        <p style={{textAlign: 'justify',fontWeight:'400'}}>Our Machine Learning–Powered Heart Stroke Prediction Web Application is an intelligent digital tool designed to assess the risk of heart strokes based on user-provided health data. Built using advanced ML algorithms, this web app provides fast, data-driven insights that can help users make informed health decisions.</p>
        <button  type="button" style={{width:'200px',height:'50px', backgroundColor:"red", color:"white"}} className="btn  mb-4">Get Started & Explore</button>
        </div>
      </div>
    </div>
   
    <div className="mt-5"> 
    <Info/>
    </div>
   <div className="container">
   <h2 className="d-flex justify-content-center align-item-center mt-5 heading" style={{color:'#343a40',fontWeight:'700'}} >Empowering Your Tech Career with Top Industry Partners</h2>
   <p className="col-12 para">WorkPrep is a dynamic platform designed to bridge the gap between tech job seekers and top-tier technology companies. Our mission is to empower aspiring professionals by providing them with unparalleled access to exclusive job opportunities, comprehensive career resources, and personalized support to help them succeed in the fast-paced tech industry.
   Leverage our strong relationships with leading tech companies to advance your career.
   </p>
   <div className="mt-5 col-12">
   <AliceCarousel mouseTracking items={items}  responsive={responsive}
   autoPlay
   autoPlayStrategy="none"
   autoPlayInterval={400}
   infinite
   />
   </div>
   </div>
    <Footer/>
  
  </>
    )
}
export default Home;