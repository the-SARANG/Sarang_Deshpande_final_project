import React from 'react'
import {Helmet} from "react-helmet";
function Footer(){
    const myStyle={
        backgroundImage: "url(https://wallpaperaccess.com/full/902481.jpg)",
        width: "auto",
        height: "300px",
        marginLeft: "5px",
        marginRight: "5px"
    }
  return (
    <>
        <div className="section bg-image overlay" style={myStyle}>
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold" style={{marginTop:"50px"}}>Liked it? then Reserve Now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="100" style={{marginTop:"50px"}}>
              <a href="http://localhost:4000/reservation" className="btn btn-primary py-3 text-white px-5">Reservation</a>
            </div>
          </div>
        </div>
    
    <div>
        
        <div className="section footer-section" style={{marginTop: "6px"}}>
        <div className="container">
            <div className="row mb-4">
            <div className="col-md-3 mb-5">
                <ul className="list-unstyled link">
                <li><a href="/about" style={{color: "black"}}>About Us</a></li>
                <li><a href="#" style={{color: "black"}}>Terms &amp; Conditions</a></li>
                <li><a href="#" style={{color: "black"}}>Privacy Policy</a></li>
                <li><a href="/rooms" style={{color: "black"}}>Rooms</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-5 pr-md-5 contact-info">
                
                <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span>Dapoli, Maharashtra</span></p>
                <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Mobile No:</span> <span> (+91) 7894561320 </span></p>
                <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> hotel@sunshine.com</span></p>
            </div>
            </div>
                
            <div className="col-md-4">
                <a href="#"><span className="fa fa-facebook"></span></a>
                <a href="#"><span className="fa fa-twitter"></span></a>
                <a href="#"><span className="fa fa-linkedin"></span></a>
                <p>©Sarang</p>
            </div>
            
            </div>
        </div>
        </div>
    </div> 
    </>
  )
}

export default Footer