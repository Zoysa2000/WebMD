import React from "react";
import { Bounce } from "react-reveal";


function Info()
{
    return(
        <>
        <div className="container">
            <div className="row">
                <Bounce top duration={4000}>
                <div className="col-12 col-md-6" >
                <div className=" p-5">
                <h5>Got Talent?</h5>
                <h1 style={{fontWeight:'700'}}>Why job seekers love us</h1>
                <div className="d-flex gap-3 mt-3">
                <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"/>
                 <p>Connect directly with founders at top startups - no third party recruiters allowed.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
                 <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"/>   
              <p>Everything you need to know, all upfront. View salary, stock options, and more before applying.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
                <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"/>
                <p>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
               <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"/>
                 <p>Unique jobs at startups and tech companies you can’t find anywhere else.</p>   
                </div>
                <div className="d-flex gap-3">
                 <button  type="button" className="btn btn-outline-dark">Recruiters</button>
                 <button type="button" className="btn btn-dark">Seekers</button>
                 </div>
                </div>

            </div>
                </Bounce>
                <Bounce bottom duration={4000}>
                <div className="col-12 col-md-6" style={{backgroundColor:"#fff4f6"}}>
            <div className="p-5">
            <h5>Need Talent?</h5>
            <h1 style={{fontWeight:'700'}}>Why recruiters love us</h1>
            <div className="d-flex gap-3 mt-3">
                <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"/>
                 <p>Tap into a community of 10M+ engaged, startup-ready candidates.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
                 <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"/>   
              <p>Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
                <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"/>
                <p>A free applicant tracking system, or free integration with any ATS you may already use.</p>   
                </div>
                <div className="d-flex gap-3 mt-3">
               <img alt="icon" style={{height:'30px',width:"30px"}} src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"/>
                 <p>Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.</p>   
                </div>
                <div className="d-flex gap-3">
                 <button  type="button" className="btn btn-dark">Recruiters</button>
                 <button type="button" className="btn btn-outline-dark">Seekers</button>
                 </div>
         </div>

                
        </div>
                </Bounce>
            </div>

        </div>
        </>
    )
}

export default Info;